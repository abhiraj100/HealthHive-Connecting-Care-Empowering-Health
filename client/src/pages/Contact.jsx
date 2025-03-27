import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets.js";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const faqs = [
  {
    question: "How can I book an appointment?",
    answer:
      "You can book an appointment through our website or by calling our support team.",
  },
  {
    question: "What are the working hours of HealthHive?",
    answer: "We operate Monday to Friday from 9 AM to 6 PM (IST).",
  },
  {
    question: "How do I apply for a job at HealthHive?",
    answer: "Visit our Careers page and submit your application online.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We provide a wide range of healthcare services including consultations, diagnostics, and wellness programs.",
  },
];

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="container mx-auto px-6 md:px-16 py-10">
      {/* Heading */}
      <div className="text-center text-3xl font-semibold text-gray-700">
        <p>
          CONTACT <span className="text-blue-600">US</span>
        </p>
      </div>

      {/* Contact Info & Image */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 my-10">
        <img
          className="w-full md:max-w-[400px] rounded-lg shadow-lg"
          src={assets.contact_image}
          alt="Contact Us"
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
          <button className="border border-black px-6 py-3 text-sm hover:bg-black hover:text-white transition-all duration-500 rounded-md">
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
          Find Us Here
        </h2>
        <div className="w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14576.311227458753!2d84.06275533359539!3d24.02832125410619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398c77d87d6f64f7%3A0x13100d25b7ea6790!2sBelwatika%2C%20Medininagar%2C%20Jharkhand%20822101!5e0!3m2!1sen!2sin!4v1743100112379!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="text-center mt-10">
        <h2 className="text-lg font-semibold text-gray-700">Connect with Us</h2>
        <div className="flex justify-center gap-6 mt-4 text-2xl">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <FaFacebook />
          </a>
          <a href="#" className="text-pink-600 hover:text-pink-800">
            <FaInstagram />
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-600">
            <FaTwitter />
          </a>
          <a href="#" className="text-green-600 hover:text-green-800">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Additional Contact Details */}
      <div className="text-center mt-10">
        <h2 className="text-lg font-semibold text-gray-700">
          Customer Support
        </h2>
        <p className="text-gray-500">
          For immediate assistance, reach out to our support team at:
        </p>
        <p className="text-gray-700 font-semibold">support@healthhive.com</p>
        <p className="text-gray-500 mt-2">
          Available: Monday - Friday, 9 AM - 6 PM (IST)
        </p>
      </div>

      {/* FAQ Section */}
      <div className="mt-10 p-6 md:p-10 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-2">
              <button
                className="w-full text-left font-semibold text-gray-700 flex justify-between items-center py-2 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                {faq.question}
                <span>{openIndex === index ? "▼" : "▶"}</span>
              </button>
              {openIndex === index && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;

// import React from "react";
// import { assets } from "../assets/assets_frontend/assets.js";

// const Contact = () => {
//   return (
//     <div>
//       <div className="text-center text-2xl pt-10 text-gray-500">
//         <p>
//           CONTACT <span className="text-gray-700 font-medium">US</span>
//         </p>
//       </div>

//       {/*  */}

//       <div className="flex my-10 flex-col md:flex-row justify-center gap-10 mb-28 text-sm">
//         <img
//           className="w-full md:max-w-[360px]"
//           src={assets.contact_image}
//           alt=""
//         />

//         <div className="flex flex-col justify-center items-start gap-6">
//           <p className="font-semibold text-gray-600 text-lg">OUR OFFICE</p>
//           <p className="text-gray-500">
//             822101 Belwatika Pampukal <br /> Palamu, Jharkhand, INDIA
//           </p>
//           <p className="text-gray-500">
//             TEL: (+91) 555-0123-456 <br /> health.hive@gmail.com
//           </p>
//           <p className="font-semibold text-lg text-gray-600">
//             Careers at HealthHive
//           </p>
//           <p className="text-gray-500">
//             Learn more about our teams and job openings.
//           </p>
//           <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
//             Explore Jobs
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
