import express from "express";
import {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  bookAppointment,
  listAppointment,
  cancelAppointment,
  // paymentStripe,
  // paymentRazorpay,
  verifyRazorpay,
  createSession,
} from "../controllers/user.controller.js";
import userAuth from "../middlewares/auth.user.js";
import upload from "../middlewares/multer.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/get-profile", userAuth, getProfile);
userRouter.post(
  "/update-profile",
  upload.single("image"),
  userAuth,
  updateProfile
);
userRouter.post("/book-appointment", userAuth, bookAppointment);
userRouter.get("/appointments", userAuth, listAppointment);
userRouter.post("/cancel-appointment", userAuth, cancelAppointment);
userRouter.post("/payment-stripe", userAuth, createSession);
userRouter.post("/verifyRazorpay", userAuth, verifyRazorpay);

export default userRouter;
