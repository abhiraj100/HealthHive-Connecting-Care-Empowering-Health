import React from "react";
import { assets } from "../assets/assets_frontend/assets.js";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left section */}
        <div>
          <img className="mt-0 w-20" src={assets.logo} alt="" width={60} />
          <p className="w-full md:w-2/3 mt-2 text-gray-600 leading-6">
            HealthHive is a seamless platform connecting users with top doctors
            for hassle-free appointments. It offers a trusted network of
            healthcare professionals, ensuring quick and reliable consultations.
            <br />
            Your health, your time—simplified with HealthHive! 🚀
          </p>
        </div>
        {/* center section */}
        <div>
          <p className="text-xl font-medium mb-5 ">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <NavLink onClick={() => scrollTo(0, 0)} to="/">
              Home
            </NavLink>
            <NavLink onClick={() => scrollTo(0, 0)} to="/about">
              About us
            </NavLink>
            <NavLink onClick={() => scrollTo(0, 0)} to="/contact">
              Contact us
            </NavLink>
            <NavLink onClick={() => scrollTo(0, 0)} to="/privacy">
              Privacy Policy
            </NavLink>
          </ul>
        </div>
        {/* right section */}
        <div>
          <p className="text-xl font-medium mb-5 ">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 9123456780</li>
            <li>health.hive@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* -------- copyright text ---------- */}

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ HeathHive - All right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
