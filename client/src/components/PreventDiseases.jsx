import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Utensils,
  Dumbbell,
  Droplet,
  Syringe,
  Brain,
  Moon,
  Ban,
  Stethoscope,
} from "lucide-react";

const PreventDiseases = () => {
  const tips = [
    {
      title: "Maintain Proper Hygiene",
      description:
        "Wash your hands frequently, keep your surroundings clean, and practice good personal hygiene to prevent infections.",
      icon: <ShieldCheck className="text-blue-600 w-8 h-8" />,
    },
    {
      title: "Eat a Balanced Diet",
      description:
        "Consume a variety of fruits, vegetables, whole grains, and lean proteins to boost your immune system and overall health.",
      icon: <Utensils className="text-green-600 w-8 h-8" />,
    },
    {
      title: "Exercise Regularly",
      description:
        "Engage in at least 30 minutes of physical activity daily to keep your body fit and reduce the risk of chronic diseases.",
      icon: <Dumbbell className="text-red-600 w-8 h-8" />,
    },
    {
      title: "Stay Hydrated",
      description:
        "Drink enough water throughout the day to flush out toxins and maintain proper body functions.",
      icon: <Droplet className="text-blue-400 w-8 h-8" />,
    },
    {
      title: "Get Vaccinated",
      description:
        "Keep up with recommended vaccinations to protect yourself from preventable diseases.",
      icon: <Syringe className="text-yellow-600 w-8 h-8" />,
    },
    {
      title: "Manage Stress",
      description:
        "Practice relaxation techniques like meditation, deep breathing, and yoga to reduce stress and enhance well-being.",
      icon: <Brain className="text-purple-600 w-8 h-8" />,
    },
    {
      title: "Get Enough Sleep",
      description:
        "Aim for 7-9 hours of quality sleep each night to support your immune system and mental health.",
      icon: <Moon className="text-gray-600 w-8 h-8" />,
    },
    {
      title: "Avoid Smoking & Alcohol",
      description:
        "Limit tobacco and alcohol consumption to lower your risk of respiratory and liver diseases.",
      icon: <Ban className="text-orange-600 w-8 h-8" />,
    },
    {
      title: "Regular Health Checkups",
      description:
        "Visit your doctor regularly for screenings and early detection of health conditions.",
      icon: <Stethoscope className="text-teal-600 w-8 h-8" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-6 max-w-full px-20 mx-auto h-auto bg-gray-100 "
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        How to Prevent Common Diseases
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {tips.map((tip, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white flex items-center gap-4"
          >
            {tip.icon}
            <div>
              <h3 className="font-semibold text-lg text-gray-800">
                {tip.title}
              </h3>
              <p className="text-gray-600 mt-2">{tip.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PreventDiseases;

// import React from "react";
// import { motion } from "framer-motion";

// const PreventDiseases = () => {
//   const tips = [
//     {
//       title: "Maintain Proper Hygiene",
//       description:
//         "Wash your hands frequently, keep your surroundings clean, and practice good personal hygiene to prevent infections.",
//     },
//     {
//       title: "Eat a Balanced Diet",
//       description:
//         "Consume a variety of fruits, vegetables, whole grains, and lean proteins to boost your immune system and overall health.",
//     },
//     {
//       title: "Exercise Regularly",
//       description:
//         "Engage in at least 30 minutes of physical activity daily to keep your body fit and reduce the risk of chronic diseases.",
//     },
//     {
//       title: "Stay Hydrated",
//       description:
//         "Drink enough water throughout the day to flush out toxins and maintain proper body functions.",
//     },
//     {
//       title: "Get Vaccinated",
//       description:
//         "Keep up with recommended vaccinations to protect yourself from preventable diseases.",
//     },
//     {
//       title: "Manage Stress",
//       description:
//         "Practice relaxation techniques like meditation, deep breathing, and yoga to reduce stress and enhance well-being.",
//     },
//     {
//       title: "Get Enough Sleep",
//       description:
//         "Aim for 7-9 hours of quality sleep each night to support your immune system and mental health.",
//     },
//     {
//       title: "Avoid Smoking & Alcohol",
//       description:
//         "Limit tobacco and alcohol consumption to lower your risk of respiratory and liver diseases.",
//     },
//     {
//       title: "Regular Health Checkups",
//       description:
//         "Visit your doctor regularly for screenings and early detection of health conditions.",
//     },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       className="p-6 max-w-4xl mx-auto"
//     >
//       <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
//         How to Prevent Common Diseases
//       </h2>
//       <div className="grid md:grid-cols-2 gap-6">
//         {tips.map((tip, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             whileHover={{ scale: 1.05 }}
//             className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white"
//           >
//             <h3 className="font-semibold text-lg text-blue-600">{tip.title}</h3>
//             <p className="text-gray-600 mt-2">{tip.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default PreventDiseases;
