import React, { useState } from "react";
import { assets } from "../assets/assets_admin/assets.js";
import { useContext } from "react";
import { AdminContext } from "../context/AdminContext.jsx";
import axios from "axios";
import { toast } from "react-toastify";
import { DoctorContext } from "../context/DoctorContext.jsx";
// import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAToken, backendUrl } = useContext(AdminContext);
  const { setDToken, dToken } = useContext(DoctorContext);
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === "Admin") {
        const { data } = await axios.post(`${backendUrl}/api/admin/login`, {
          email,
          password,
        });
        // console.log(data);
        if (data.success) {
          localStorage.setItem("aToken", data.token);
          setAToken(data.token);
          toast.success("Login Successful!");
          navigate("/admin-dashboard");
        } else {
          toast.error(data?.message || "Invalid Credentials");
        }
      } else {
        const { data } = await axios.post(`${backendUrl}/api/doctor/login`, {
          email,
          password,
        });
        // console.log(data);
        if (data.success) {
          localStorage.setItem("dToken", data.token);
          setDToken(data.token);
          // console.log(data.token);
          toast.success("Login Successful!");
          navigate("/doctor-dashboard");
        } else {
          toast.error(data?.message || "Invalid Credentials");
        }
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Oops Something went wrong"
      );
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto ">
          <span className="text-[#5f6FFF]"> {state} </span> Login
        </p>
        <div className="w-full ">
          <p>Email : </p>
          <input
            className="border border-[#DADADA] rounded w-full  p-2 mt-1"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full ">
          <p>Password : </p>
          <input
            className="border border-[#DADADA] rounded w-full  p-2 mt-1"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button
          type="submit"
          className="bg-[#5f6FFF] text-white w-full py-2 rounded-md text-base"
        >
          Login
        </button>
        {state === "Admin" ? (
          <p>
            Doctor Login ?{" "}
            <span
              className="text-[#5f6FFF] underline cursor-pointer"
              onClick={() => setState("Doctor")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Admin Login ?{" "}
            <span
              className="text-[#5f6FFF] underline cursor-pointer"
              onClick={() => setState("Admin")}
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
