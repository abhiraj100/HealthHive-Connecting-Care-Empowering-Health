import React from "react";
import { assets } from "../assets/assets_frontend/assets.js";

const About = () => {
  return (
    <div className="px-4 md:px-12 lg:px-20">
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="flex my-4 flex-col md:flex-row gap-12 items-center">
        <img
          className="w-full max-w-[360px] h-[400px]"
          src={assets.about_image}
          alt="About HealthHive"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to <b>HealthHive</b>, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At HealthHive, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            We are committed to excellence in healthcare technology. Our
            platform is designed to simplify access to medical care, making it
            seamless to book appointments, store medical records securely, and
            receive health reminders, ensuring a hassle-free healthcare
            experience.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at <b>HealthHive</b> is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-10">
        <b className="text-gray-800">Our Values</b>
        <ul className="list-disc pl-5">
          <li>
            <b>Accessibility:</b> We ensure everyone has easy access to quality
            healthcare services.
          </li>
          <li>
            <b>Innovation:</b> Continuously evolving with the latest technology
            to enhance user experience.
          </li>
          <li>
            <b>Security:</b> Protecting your health data with robust encryption
            and privacy measures.
          </li>
          <li>
            <b>Compassion:</b> Putting patients first and making healthcare more
            human-centered.
          </li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="text-left text-xl my-4 text-gray-500">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="text-left text-xl my-4 text-gray-500">
        <p>
          MEET <span className="text-gray-700 font-semibold">OUR TEAM</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="border p-6 flex flex-col items-center text-center hover:shadow-lg hover:bg-[#5f6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <img
            className="w-24 h-24 rounded-full mb-4"
            src={assets.team_member_1}
            alt="Team Member 1"
          />
          <b className="text-gray-800">Dr. Emily Watson</b>
          <p className="text-sm text-gray-600">Chief Medical Officer</p>
        </div>
        <div className="border p-6 flex flex-col items-center text-center hover:shadow-lg hover:bg-[#5f6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <img
            className="w-24 h-24 rounded-full mb-4"
            src={assets.team_member_2}
            alt="Team Member 2"
          />
          <b className="text-gray-800">John Smith</b>
          <p className="text-sm text-gray-600">Head of Technology</p>
        </div>
        <div className="border p-6 flex flex-col items-center text-center hover:shadow-lg hover:bg-[#5f6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <img
            className="w-24 h-24 rounded-full mb-4"
            src={assets.team_member_3}
            alt="Team Member 3"
          />
          <b className="text-gray-800">Sarah Johnson</b>
          <p className="text-sm text-gray-600">Lead UX Designer</p>
        </div>
      </div>
    </div>
  );
};

export default About;

// import React from "react";
// import { assets } from "../assets/assets_frontend/assets.js";

// const About = () => {
//   return (
//     <div>
//       <div className="text-center text-2xl pt-10 text-gray-500">
//         <p>
//           ABOUT <span className="text-gray-700 font-medium">US</span>
//         </p>
//       </div>

//       <div className="flex my-10 flex-col md:flex-row gap-12">
//         <img className="w-full max-w-[360px]" src={assets.about_image} alt="" />
//         <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
//           <p>
//             Welcome to HealthHive, you trusted partner in managing your
//             healthcare needs conceniently and efficiently. At HealthHive, we
//             understand the challenges individuals face when it comes to
//             scheduling doctor appointments and managing their health records.
//           </p>
//           <p>
//             HealthHive is committed to excellence in healthcare technology. We
//             continuously strive to enchance our platform, integrating the latest
//             advancements to improve user experience and deliver superior
//             service. Whether you're looking your first appointment or managing
//             ongoing care, HealthHive is here to support you every step of the
//             way.
//           </p>
//           <b className="text-gray-800">Our Vision</b>
//           <p>
//             Our Vision at HealthHive is to create a seamless healthcare
//             experience for every user. We aim to bridg the gap between patients
//             and healthcare providers, making it easier for you to access the
//             care you need, when you need it.
//           </p>
//         </div>
//       </div>

//       {/* bottom */}

//       <div className="text-left text-xl my-4 text-gray-500">
//         <p>
//           WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
//         </p>
//       </div>

//       {/* columns */}

//       <div className="flex flex-col md:flex-row mb-20">
//         <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
//           <b>Efficiency : </b>
//           <p>
//             Streamlined appointment scheduling that fits into your busy
//             lifestyle.{" "}
//           </p>
//         </div>
//         <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
//           <b>Convenience : </b>
//           <p>
//             Access to a network of trusted healthcare professionals in your
//             area.
//           </p>
//         </div>
//         <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
//           <b>Personalization : </b>
//           <p>
//             Tailored recommendations and reminders to help you stay on top of
//             your health.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
