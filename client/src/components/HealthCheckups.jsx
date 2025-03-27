import React from "react";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaShieldAlt,
  FaStethoscope,
  FaUserMd,
  FaMoneyBillWave,
  FaHeart,
  FaSmile,
  FaClipboardCheck,
} from "react-icons/fa";

const HealthCheckups = () => {
  const reasons = [
    {
      icon: <FaHeartbeat className="text-red-500 text-2xl" />,
      title: "Early Detection of Diseases",
      description:
        "Regular check-ups help detect illnesses at an early stage, improving treatment success rates.",
    },
    {
      icon: <FaShieldAlt className="text-green-500 text-2xl" />,
      title: "Prevention is Better than Cure",
      description:
        "Routine screenings help identify risk factors and prevent serious health conditions.",
    },
    {
      icon: <FaStethoscope className="text-blue-500 text-2xl" />,
      title: "Monitor Existing Health Conditions",
      description:
        "For those with chronic illnesses like diabetes or hypertension, check-ups help in better management.",
    },
    {
      icon: <FaUserMd className="text-yellow-500 text-2xl" />,
      title: "Improves Lifespan",
      description:
        "Preventive care and timely medical intervention can lead to a longer, healthier life.",
    },
    {
      icon: <FaMoneyBillWave className="text-indigo-500 text-2xl" />,
      title: "Saves Money in the Long Run",
      description:
        "Detecting health issues early reduces the need for expensive treatments later.",
    },
    {
      icon: <FaHeart className="text-pink-500 text-2xl" />,
      title: "Reduces Health Risks",
      description:
        "Regular health check-ups help maintain overall well-being by tracking key health indicators.",
    },
    {
      icon: <FaSmile className="text-orange-500 text-2xl" />,
      title: "Boosts Mental Well-being",
      description:
        "Knowing you are in good health can reduce stress and provide peace of mind.",
    },
    {
      icon: <FaClipboardCheck className="text-teal-500 text-2xl" />,
      title: "Personalized Healthcare Advice",
      description:
        "Doctors provide tailored health recommendations based on medical history and lifestyle.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-6 max-w-full px-20 mx-auto h-auto bg-gray-100"
    >
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Why Regular Health Check-ups Matter
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Routine medical check-ups are essential for maintaining good health
          and preventing diseases.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white flex items-start space-x-4"
            >
              {reason.icon}
              <div>
                <h3 className="font-semibold text-lg text-blue-600">
                  {reason.title}
                </h3>
                <p className="text-gray-600 mt-2">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HealthCheckups;

// import React from "react";
// import { motion } from "framer-motion";

// const HealthCheckups = () => {
//   const reasons = [
//     {
//       title: "Early Detection of Diseases",
//       description:
//         "Regular check-ups help detect illnesses at an early stage, improving treatment success rates.",
//     },
//     {
//       title: "Prevention is Better than Cure",
//       description:
//         "Routine screenings help identify risk factors and prevent serious health conditions.",
//     },
//     {
//       title: "Monitor Existing Health Conditions",
//       description:
//         "For those with chronic illnesses like diabetes or hypertension, check-ups help in better management.",
//     },
//     {
//       title: "Improves Lifespan",
//       description:
//         "Preventive care and timely medical intervention can lead to a longer, healthier life.",
//     },
//     {
//       title: "Saves Money in the Long Run",
//       description:
//         "Detecting health issues early reduces the need for expensive treatments later.",
//     },
//     {
//       title: "Reduces Health Risks",
//       description:
//         "Regular health check-ups help maintain overall well-being by tracking key health indicators.",
//     },
//     {
//       title: "Boosts Mental Well-being",
//       description:
//         "Knowing you are in good health can reduce stress and provide peace of mind.",
//     },
//     {
//       title: "Personalized Healthcare Advice",
//       description:
//         "Doctors provide tailored health recommendations based on medical history and lifestyle.",
//     },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       className="p-6 max-w-4xl mx-auto bg-gray-100"
//     >
//       <div className="p-6 max-w-4xl mx-auto">
//         <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
//           Why Regular Health Check-ups Matter
//         </h2>
//         <p className="text-gray-600 text-center mb-8">
//           Routine medical check-ups are essential for maintaining good health
//           and preventing diseases.
//         </p>
//         <div className="grid md:grid-cols-2 gap-6">
//           {reasons.map((reason, index) => (
//             <div
//               key={index}
//               className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white"
//             >
//               <h3 className="font-semibold text-lg text-blue-600">
//                 {reason.title}
//               </h3>
//               <p className="text-gray-600 mt-2">{reason.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default HealthCheckups;
