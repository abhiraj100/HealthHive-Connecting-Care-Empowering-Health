import doctorModel from "../models/doctor.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointment.model.js";

// change availability function

const changeAvailability = async (req, res) => {
  try {
    const { docId } = req.body;

    // Validate docId
    if (!docId) {
      return res.status(400).json({
        success: false,
        message: "Doctor ID is required",
      });
    }

    // Find doctor by ID
    const docData = await doctorModel.findById(docId);

    if (!docData) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    // Update availability
    const updatedDoctor = await doctorModel.findByIdAndUpdate(
      docId,
      { available: !docData.available },
      { new: true } // To return the updated document
    );
    // await doctorModel.findByIdAndUpdate(docId, {
    //   available: !docData.available,
    // });

    return res.status(200).json({
      success: true,
      message: "Availability Change Successfully",
      doctor: updatedDoctor, // Return updated doctor data
    });
  } catch (error) {
    console.error("Changing Availability Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message || "Something went wrong",
    });
  }
};

// get all doctors list for frontend

const doctorList = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select(["-password, -email"]);

    return res.status(200).json({
      success: true,
      message: "Retrieve Doctors List Successfully!!",
      doctors,
    });
  } catch (error) {
    console.error("Error while retrieving the doctors list", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message || "Something went wrong",
    });
  }
};

// API for doctor login
const loginDoctor = async (req, res) => {
  try {
    const { email, password } = req.body;
    const doctor = await doctorModel.findOne({ email });

    if (!doctor) {
      return res.status(400).json({
        success: false,
        message: "Doctor not found, Invalid Credentails",
        error: error,
      });
    }

    const isMatchPass = await bcrypt.compare(password, doctor.password);

    if (isMatchPass) {
      const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET);

      return res.status(200).json({
        success: true,
        message: "Login Successful",
        token,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Incorrect Password, Invalid Credentials",
        // error: error,
      });
    }
  } catch (error) {
    console.error("Error while Login Doctor", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message || "Something went wrong",
    });
  }
};

// API to get doctor appointments for doctor panel

const appointmentsDoctor = async (req, res) => {
  try {
    // const { docId } = req.body;
    const { docId } = req.params; // Fetch docId from params
    const appointments = await appointmentModel.find({ docId });

    if (!appointments) {
      return res.status(400).json({
        success: false,
        message: "Appointments not found of this doctor",
        error: error,
      });
    }

    return res.status(200).json({
      success: true,
      appointments,
    });
  } catch (error) {
    console.error("Error while Fetching Doctor Appointments", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message || "Something went wrong",
    });
  }
};

// API to mark apppointment completed for doctor panel

const appointmentComplete = async (req, res) => {
  try {
    const { docId } = req.params;
    const { appointmentId } = req.body;
    const appointmentData = await appointmentModel.findById(appointmentId);
    if (!appointmentData) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    // Convert ObjectId to string for comparison
    if (appointmentData.docId !== docId) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized: You cannot complete this appointment",
      });
    }

    if (appointmentData && appointmentData.docId === docId) {
      const updatedAppointment = await appointmentModel.findByIdAndUpdate(
        appointmentId,
        {
          isCompleted: true,
        },
        { new: true }
      );

      return res.status(200).json({
        success: true,
        message: "Appointment Completed",
        appointment: updatedAppointment,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Mark Failed || Invalid Appointment or Unauthorized Action",
      });
    }
  } catch (error) {
    console.error("Error while Completing Doctor Appointments", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message || "Something went wrong",
    });
  }
};

// API to cancel apppointment for doctor panel

const appointmentCancel = async (req, res) => {
  try {
    const { docId } = req.params;
    const { appointmentId } = req.body;
    const appointmentData = await appointmentModel.findById(appointmentId);
    if (!appointmentData) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    if (appointmentData && appointmentData.docId === docId) {
      await appointmentModel.findByIdAndUpdate(appointmentId, {
        cancelled: true,
      });

      return res.status(200).json({
        success: true,
        message: "Appointment Cancelled Successfully",
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Cancellation Failed",
      });
    }
  } catch (error) {
    console.error("Error while Cancelling Doctor Appointments", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error" || error.message,
      error: error.message || "Something went wrong",
    });
  }
};

// API to get dashboard data for doctor panel

const doctorDashboard = async (req, res) => {
  try {
    const { docId } = req.params;
    const appointments = await appointmentModel.find({ docId });
    if (!appointments) {
      return res.status(404).json({
        success: false,
        message: "Appointments not found for this doctor",
      });
    }

    let earnings = 0;

    appointments.map((item) => {
      if (item.completed || item.payment) {
        earnings += item.amount;
      }
    });

    let patients = [];

    appointments.map((item) => {
      if (!patients.includes(item.userId)) {
        patients.push(item.userId);
      }
    });

    const dashData = {
      earnings,
      appointments: appointments.length,
      patients: patients.length,
      latestAppointments: appointments.reverse().slice(0, 5),
    };

    return res.status(200).json({
      success: true,
      message: "Doctors Dashboard Data Fetched Successfully",
      dashData,
    });
  } catch (error) {
    console.error("Error while Fetching Doctor Dashboard Data", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error" || error.message,
      error: error.message || "Something went wrong",
    });
  }
};

// API to get doctor profile for doctor panel
const doctorProfile = async (req, res) => {
  try {
    const { docId } = req.body;
    const profileData = await doctorModel.findById(docId).select("-password");

    if (!profileData) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    return res.status(200).json({
      success: true,
      profileData,
    });
  } catch (error) {
    console.error("Error while Fetching Doctor Data", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error" || error.message,
      error: error.message || "Something went wrong",
    });
  }
};

// API to update doctor profile data from doctor panel

const updateDoctorProfile = async (req, res) => {
  try {
    // const { docId } = req.params;
    const { docId, fees, address, available } = req.body;

    await doctorModel.findByIdAndUpdate(docId, {
      fees,
      address,
      available,
    });

    return res.status(200).json({
      success: true,
      message: "Profile Updated",
    });
  } catch (error) {
    console.error("Error while Updating Doctor Data", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error" || error.message,
      error: error.message || "Something went wrong",
    });
  }
};

export {
  changeAvailability,
  doctorList,
  loginDoctor,
  appointmentsDoctor,
  appointmentComplete,
  appointmentCancel,
  doctorDashboard,
  doctorProfile,
  updateDoctorProfile,
};
