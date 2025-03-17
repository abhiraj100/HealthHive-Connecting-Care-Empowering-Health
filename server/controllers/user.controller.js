import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctor.model.js";
import appointmentModel from "../models/appointment.model.js";
// import Stripe from "stripe";
import Razorpay from "razorpay";
import dotenv from "dotenv";
dotenv.config();
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// API to register user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Missing Details, Fill every fields",
        error: error.message,
      });
    }

    // validate email format

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Email not matched, Enter a valid email",
        error: error.message,
      });
    }

    // validating strong password
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Enter a strong password",
        error: error.message,
      });
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // save the hashedpassword in the database
    const userData = {
      name,
      email,
      password: hashedPassword,
    };

    const newUser = new userModel(userData);
    const user = await newUser.save();
    // _id -> by using this property we are going to create one token so user can login on the website.

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    return res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      token,
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

// API for user login

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All Fields are required!!",
        error: error.message,
      });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User doesn't exists",
        error: error.message,
      });
    }

    const isMatchPass = await bcrypt.compare(password, user.password);

    if (isMatchPass) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      return res.status(200).json({
        success: true,
        message: "User exists",
        token,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials",
        error: error.message,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

// API for getting user-profile data

const getProfile = async (req, res) => {
  try {
    const { userId } = req.body;

    const userData = await userModel.findById(userId).select("-password");
    if (!userData) {
      return res.status(400).json({
        success: false,
        message: "User doesn't exists",
        error: error.message,
      });
    }

    return res.status(200).json({
      success: true,
      message: "User Data",
      userData,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

// API for updating the user-profile

const updateProfile = async (req, res) => {
  try {
    const { userId, name, phone, address, gender, dob } = req.body;
    const imageFile = req.file;

    if (!name || !phone || !gender || !dob) {
      return res.status(400).json({
        success: false,
        message: "All Fields are required, Data is Missing !!",
        error: error.message,
      });
    }

    await userModel.findByIdAndUpdate(userId, {
      name,
      phone,
      address: JSON.parse(address),
      dob,
      gender,
    });

    if (imageFile) {
      // upload image to cloudinary
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });

      const imageUrl = imageUpload.secure_url;

      await userModel.findByIdAndUpdate(userId, { image: imageUrl });
    }

    return res.status(200).json({
      success: true,
      message: "Profile Updated",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

// API to book appointment
const bookAppointment = async (req, res) => {
  try {
    const { userId, docId, slotDate, slotTime } = req.body;

    const docData = await doctorModel.findById(docId).select("-password");

    if (!docData) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    if (!docData.available) {
      return res.status(400).json({
        success: false,
        message: "Doctor not available",
      });
    }

    // Ensure slots_booked is initialized as an object
    let slots_booked = docData.slots_booked || {};

    // Initialize slotDate entry if not present
    if (!slots_booked[slotDate]) {
      slots_booked[slotDate] = [];
    }

    // checking for slots availability
    if (slots_booked[slotDate]) {
      if (slots_booked[slotDate].includes(slotTime)) {
        return res.status(400).json({
          success: false,
          message: "Slot not available",
        });
      } else {
        slots_booked[slotDate].push(slotTime);
      }
    } else {
      slots_booked[slotDate] = [];
      slots_booked[slotDate].push(slotTime);
    }

    const userData = await userModel.findById(userId).select("-password");

    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // delete docData.slots_booked;

    const appointmentData = {
      userId,
      doctorId: docId,
      userData,
      docData: { ...docData.toObject() }, // Remove slots_booked from response
      amount: docData.fees,
      cancelled: false,
      slotTime,
      slotDate,
      date: Date.now(),
    };

    const newAppointment = new appointmentModel(appointmentData);
    await newAppointment.save();

    // save new slots data in doctors data (docData)
    await doctorModel.findByIdAndUpdate(docId, { slots_booked }, { new: true });

    return res.status(200).json({
      success: true,
      message: "Appointment Booked Successfully",
    });
  } catch (error) {
    console.error("Error Booking Appointment:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// API to get user appointments for frontend my-appointments page

const listAppointment = async (req, res) => {
  try {
    const { userId } = req.body;
    const appointments = await appointmentModel.find({ userId });

    return res.status(200).json({
      success: true,
      appointments,
    });
  } catch (error) {
    console.error("Error while fetching User Appointments :", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// API to cancel appointment
const cancelAppointment = async (req, res) => {
  try {
    const { userId, appointmentId } = req.body;

    const appointmentData = await appointmentModel.findById(appointmentId);

    if (!appointmentData) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    // Verify Appointment User
    if (appointmentData.userId.toString() !== userId) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized action",
      });
    }

    await appointmentModel.findByIdAndUpdate(appointmentId, {
      cancelled: true,
    });

    // releasing doctor slot

    const { doctorId, slotDate, slotTime } = appointmentData;

    // Find the doctor
    const doctorData = await doctorModel.findById(doctorId);

    if (!doctorData) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    let slots_booked = doctorData?.slots_booked || {};

    // Ensure slotDate exists in slots_booked
    if (!slots_booked[slotDate]) {
      console.log("❌ Slot date not found:", slotDate);
      return res.status(400).json({
        success: false,
        message: "Slot date not found in booked slots",
      });
    }

    // slots_booked[slotDate] = slots_booked[slotDate].filter(
    //   (e) => e !== slotTime
    // );

    if (slots_booked[slotDate]) {
      slots_booked[slotDate] = slots_booked[slotDate].filter(
        (e) => e !== slotTime
      );

      // If the slotDate becomes empty, remove it from the object
      if (slots_booked[slotDate].length === 0) {
        delete slots_booked[slotDate];
      }
    }

    await doctorModel.findByIdAndUpdate(doctorId, { slots_booked });

    return res.status(200).json({
      success: true,
      message: "Appointment Cancelled",
    });
  } catch (error) {
    console.error("Error while Cancelling Appointment :", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// const keyId = process.env.RAZORPAY_KEY_ID;
// console.log(keyId);

if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
  console.log("Razorpay API keys are missing! Check your .env file.");
}

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// API to make payment of appointment using razorpay
// const paymentRazorpay = async (req, res) => {
//   try {
//     const { appointmentId } = req.body;

//     if (!appointmentId) {
//       return res.status(400).json({
//         success: false,
//         message: "Appointment ID is required",
//       });
//     }

//     const appointmentData = await appointmentModel.findById(appointmentId);

//     if (!appointmentData || appointmentData.cancelled) {
//       return res.status(400).json({
//         success: false,
//         message: "Appointment Cancelled or not found",
//       });
//     }

//     // Ensure razorpayInstance is available
//     if (!razorpayInstance) {
//       return res.status(500).json({
//         success: false,
//         message: "Razorpay instance not initialized",
//       });
//     }

//     // Creating options for razorpay payment

//     const options = {
//       amount: Math.round(appointmentData.amount * 100),
//       currency: process.env.CURRENCY || "INR",
//       receipt: appointmentId,
//       // receipt: `${appointmentId}_${Date.now()}`,
//     };

//     // creation of an order

//     const order = await razorpayInstance.orders.create(options);
//     return res.status(200).json({
//       success: true,
//       message: "Order created successfully",
//       order,
//     });
//   } catch (error) {
//     console.error("Error while creating Razorpay order:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//       error: error.message,
//     });
//   }
// };

const createSession = async (req, res) => {
  try {
    const url = process.env.CLIENT_URL;
    const { appointmentId, amount } = req.body;
    console.log(appointmentId,amount)

    if (!appointmentId || !amount ) {
      return res.status(400).json({
        success: false,
        message: "Missing required parameters",
      });
    }
    // create order model

    const line_items = [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: "Appointment Payment",
            description: "Payment for appointment booking",
          },
          unit_amount: amount * 100, // Stripe amount is in cents
        },
        quantity: 1,
      },
    ];

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${url}/my-appointments?success=true&appointmentId=${appointmentId}`,
      cancel_url: `${url}/my-appointments?success=false&appointmentId=${appointmentId}`,
    });
    return res.status(200).json({
      success: true,
      message: "Session Created",
      session_url: session.url,
      payment: true,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
// API to verify payment of razorpay

const verifyRazorpay = async (req, res) => {
  try {
    const { razorpay_order_id } = req.body;

    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);

    // console.log(orderInfo);
    if (orderInfo.status === "paid") {
      await appointmentModel.findByIdAndUpdate(orderInfo.receipt, {
        payment: true,
      });

      return res.status(200).json({
        success: true,
        message: "Payment Successful",
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "Payment Failed",
      });
    }
  } catch (error) {
    console.error("Error while verifying the razorpay payment :", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  bookAppointment,
  listAppointment,
  cancelAppointment,
  // paymentRazorpay,
  verifyRazorpay,
  createSession
};
