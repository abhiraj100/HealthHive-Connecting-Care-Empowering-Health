import React from "react";
import { assets } from "../assets/assets_frontend/assets.js";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      {/*  */}

      <div className="flex my-10 flex-col md:flex-row justify-center gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-gray-600 text-lg">OUR OFFICE</p>
          <p className="text-gray-500">
            822101 Belwatika Pampukal <br /> Palamu, Jharkhand, INDIA
          </p>
          <p className="text-gray-500">
            TEL: (+91) 555-0123-456 <br /> health.hive@gmail.com
          </p>
          <p className="font-semibold text-lg text-gray-600">
            Careers at HealthHive
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
