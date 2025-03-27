import React from "react";
import {
  FaAppleAlt,
  FaTint,
  FaBreadSlice,
  FaUtensils,
  FaSeedling,
  FaDrumstickBite,
  FaBan,
  FaEye,
} from "react-icons/fa";

const NutritionalHabits = () => {
  const habits = [
    {
      title: "Eat a Balanced Diet",
      description:
        "Include a variety of foods such as fruits, vegetables, lean proteins, whole grains, and healthy fats in your meals.",
      icon: <FaAppleAlt className="text-green-600 text-2xl" />,
    },
    {
      title: "Stay Hydrated",
      description:
        "Drink at least 8 glasses of water daily to keep your body hydrated and functioning properly.",
      icon: <FaTint className="text-blue-500 text-2xl" />,
    },
    {
      title: "Limit Processed Foods",
      description:
        "Reduce the intake of highly processed and sugary foods to maintain good health and energy levels.",
      icon: <FaBreadSlice className="text-yellow-500 text-2xl" />,
    },
    {
      title: "Control Portion Sizes",
      description:
        "Be mindful of portion sizes to prevent overeating and maintain a healthy weight.",
      icon: <FaUtensils className="text-gray-700 text-2xl" />,
    },
    {
      title: "Consume Enough Fiber",
      description:
        "Include fiber-rich foods like whole grains, legumes, and vegetables to aid digestion and improve gut health.",
      icon: <FaSeedling className="text-green-500 text-2xl" />,
    },
    {
      title: "Prioritize Protein Intake",
      description:
        "Protein helps in muscle growth and repair. Include sources like eggs, fish, tofu, and beans in your diet.",
      icon: <FaDrumstickBite className="text-red-500 text-2xl" />,
    },
    {
      title: "Reduce Salt & Sugar",
      description:
        "Excess salt and sugar can lead to health issues like high blood pressure and diabetes. Opt for natural sweeteners and spices.",
      icon: <FaBan className="text-red-600 text-2xl" />,
    },
    {
      title: "Eat Mindfully",
      description:
        "Avoid distractions while eating and focus on your meal to improve digestion and prevent overeating.",
      icon: <FaEye className="text-blue-600 text-2xl" />,
    },
  ];

  return (
    <div className="p-6 max-w-full px-20 mx-auto h-auto bg-gray-100">
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Best Nutritional Habits
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Follow these essential nutritional habits for a healthier and more
          balanced lifestyle.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {habits.map((habit, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white flex items-center space-x-4"
            >
              {habit.icon}
              <div>
                <h3 className="font-semibold text-lg text-green-600">
                  {habit.title}
                </h3>
                <p className="text-gray-600 mt-2">{habit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NutritionalHabits;

// import React from "react";

// const NutritionalHabits = () => {
//   const habits = [
//     {
//       title: "Eat a Balanced Diet",
//       description:
//         "Include a variety of foods such as fruits, vegetables, lean proteins, whole grains, and healthy fats in your meals.",
//     },
//     {
//       title: "Stay Hydrated",
//       description:
//         "Drink at least 8 glasses of water daily to keep your body hydrated and functioning properly.",
//     },
//     {
//       title: "Limit Processed Foods",
//       description:
//         "Reduce the intake of highly processed and sugary foods to maintain good health and energy levels.",
//     },
//     {
//       title: "Control Portion Sizes",
//       description:
//         "Be mindful of portion sizes to prevent overeating and maintain a healthy weight.",
//     },
//     {
//       title: "Consume Enough Fiber",
//       description:
//         "Include fiber-rich foods like whole grains, legumes, and vegetables to aid digestion and improve gut health.",
//     },
//     {
//       title: "Prioritize Protein Intake",
//       description:
//         "Protein helps in muscle growth and repair. Include sources like eggs, fish, tofu, and beans in your diet.",
//     },
//     {
//       title: "Reduce Salt & Sugar",
//       description:
//         "Excess salt and sugar can lead to health issues like high blood pressure and diabetes. Opt for natural sweeteners and spices.",
//     },
//     {
//       title: "Eat Mindfully",
//       description:
//         "Avoid distractions while eating and focus on your meal to improve digestion and prevent overeating.",
//     },
//   ];

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-gray-100">
//       <div className="p-6 max-w-4xl mx-auto">
//         <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
//           Best Nutritional Habits
//         </h2>
//         <p className="text-gray-600 text-center mb-8">
//           Follow these essential nutritional habits for a healthier and more
//           balanced lifestyle.
//         </p>
//         <div className="grid md:grid-cols-2 gap-6">
//           {habits.map((habit, index) => (
//             <div
//               key={index}
//               className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white"
//             >
//               <h3 className="font-semibold text-lg text-green-600">
//                 {habit.title}
//               </h3>
//               <p className="text-gray-600 mt-2">{habit.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NutritionalHabits;
