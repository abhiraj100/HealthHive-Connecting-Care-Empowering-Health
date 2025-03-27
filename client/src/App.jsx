import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DiseasesAndSymptoms from "./pages/DiseasesAndSymptoms";
import HealthTipsBlog from "./pages/HealthTipsBlog";
import HealthyLifestyleTips from "./components/HealthyLifestyleTips";
import PreventDiseases from "./components/PreventDiseases";
import DailyExercise from "./components/DailyExercise";
import HealthCheckups from "./components/HealthCheckups";
import MentalHealth from "./components/MentalHealth";
import NutritionalHabits from "./components/NutritionalHabits";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/tips" element={<HealthTipsBlog />} />
        <Route path="/tips1" element={<HealthyLifestyleTips />} /> */}
        <Route path="/tips" element={<HealthTipsBlog />} />
        <Route path="/tips/tips1" element={<HealthyLifestyleTips />} />
        <Route path="/tips/tips2" element={<PreventDiseases />} />
        <Route path="/tips/tips3" element={<DailyExercise />} />
        <Route path="/tips/tips4" element={<HealthCheckups />} />
        <Route path="/tips/tips5" element={<MentalHealth />} />
        <Route path="/tips/tips5" element={<MentalHealth />} />
        <Route path="/tips/tips6" element={<NutritionalHabits />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/diseases" element={<DiseasesAndSymptoms />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
