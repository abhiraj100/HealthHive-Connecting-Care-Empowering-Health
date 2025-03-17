import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/admin.route.js";
import doctorRouter from "./routes/doctor.route.js";
import userRouter from "./routes/user.route.js";

// app config
const app = express();
const PORT = process.env.PORT || 4000;

// connect db & cloudinary
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      process.env.CLIENT_URL,
      process.env.ADMIN_URL,
    ],
    credentials: true,
  })
);

// api endpoints
app.get("/hello", (req, res) => {
  res.send("hello");
});

app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);
// localhost:4000/api/admin/add-doctor

app.listen(PORT, () => {
  console.log(
    `Server Started and it's running at port : http://localhost:${PORT}`
  );
});
