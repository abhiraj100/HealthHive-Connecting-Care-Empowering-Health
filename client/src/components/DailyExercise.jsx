import React from "react";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaBrain,
  FaBed,
  FaBolt,
  FaDumbbell,
  FaBicycle,
  FaShieldVirus,
  FaLightbulb,
} from "react-icons/fa";

const DailyExercise = () => {
  const benefits = [
    {
      title: "Boosts Physical Health",
      description:
        "Regular exercise strengthens the heart, improves circulation, and helps maintain a healthy weight.",
      icon: <FaHeartbeat className="text-red-500 w-8 h-8" />,
    },
    {
      title: "Enhances Mental Well-being",
      description:
        "Exercise releases endorphins, reducing stress, anxiety, and depression while improving mood.",
      icon: <FaBrain className="text-blue-500 w-8 h-8" />,
    },
    {
      title: "Improves Sleep Quality",
      description:
        "Engaging in physical activity helps regulate sleep patterns and ensures deeper, more restful sleep.",
      icon: <FaBed className="text-indigo-500 w-8 h-8" />,
    },
    {
      title: "Increases Energy Levels",
      description:
        "Daily movement improves stamina and reduces fatigue, keeping you energized throughout the day.",
      icon: <FaBolt className="text-yellow-500 w-8 h-8" />,
    },
    {
      title: "Strengthens Muscles & Bones",
      description:
        "Weight-bearing exercises help prevent osteoporosis and improve overall muscle tone.",
      icon: <FaDumbbell className="text-gray-700 w-8 h-8" />,
    },
    {
      title: "Supports Heart Health",
      description:
        "Cardiovascular exercises like jogging or cycling reduce the risk of heart disease and stroke.",
      icon: <FaBicycle className="text-green-500 w-8 h-8" />,
    },
    {
      title: "Boosts Immune System",
      description:
        "Regular workouts help the body fight infections and strengthen immunity against diseases.",
      icon: <FaShieldVirus className="text-purple-500 w-8 h-8" />,
    },
    {
      title: "Enhances Brain Function",
      description:
        "Exercise improves memory, concentration, and cognitive function, keeping the brain sharp.",
      icon: <FaLightbulb className="text-orange-500 w-8 h-8" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-6 max-w-full px-20 mx-auto h-auto bg-gray-100 "
    >
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          The Importance of Daily Exercise
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Engaging in daily physical activity offers numerous health benefits,
          improving both body and mind.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white flex items-center gap-4"
            >
              {benefit.icon}
              <div>
                <h3 className="font-semibold text-lg text-green-600">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mt-2">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DailyExercise;

// import React from "react";
// import { motion } from "framer-motion";

// const DailyExercise = () => {
//   const benefits = [
//     {
//       title: "Boosts Physical Health",
//       description:
//         "Regular exercise strengthens the heart, improves circulation, and helps maintain a healthy weight.",
//     },
//     {
//       title: "Enhances Mental Well-being",
//       description:
//         "Exercise releases endorphins, reducing stress, anxiety, and depression while improving mood.",
//     },
//     {
//       title: "Improves Sleep Quality",
//       description:
//         "Engaging in physical activity helps regulate sleep patterns and ensures deeper, more restful sleep.",
//     },
//     {
//       title: "Increases Energy Levels",
//       description:
//         "Daily movement improves stamina and reduces fatigue, keeping you energized throughout the day.",
//     },
//     {
//       title: "Strengthens Muscles & Bones",
//       description:
//         "Weight-bearing exercises help prevent osteoporosis and improve overall muscle tone.",
//     },
//     {
//       title: "Supports Heart Health",
//       description:
//         "Cardiovascular exercises like jogging or cycling reduce the risk of heart disease and stroke.",
//     },
//     {
//       title: "Boosts Immune System",
//       description:
//         "Regular workouts help the body fight infections and strengthen immunity against diseases.",
//     },
//     {
//       title: "Enhances Brain Function",
//       description:
//         "Exercise improves memory, concentration, and cognitive function, keeping the brain sharp.",
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
//           The Importance of Daily Exercise
//         </h2>
//         <p className="text-gray-600 text-center mb-8">
//           Engaging in daily physical activity offers numerous health benefits,
//           improving both body and mind.
//         </p>
//         <div className="grid md:grid-cols-2 gap-6">
//           {benefits.map((benefit, index) => (
//             <div
//               key={index}
//               className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white"
//             >
//               <h3 className="font-semibold text-lg text-green-600">
//                 {benefit.title}
//               </h3>
//               <p className="text-gray-600 mt-2">{benefit.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default DailyExercise;
