import React from "react";
import { FaBrain, FaHeartbeat, FaSmile, FaUsers, FaDumbbell, FaHandsHelping, FaSpa, FaBalanceScale } from "react-icons/fa";

const MentalHealth = () => {
  const awarenessPoints = [
    {
      title: "Recognizing the Importance of Mental Health",
      description:
        "Mental well-being is just as important as physical health. Prioritizing it leads to a balanced life.",
      icon: <FaBrain className="text-blue-600 text-2xl" />,
    },
    {
      title: "Managing Stress Effectively",
      description:
        "Practicing mindfulness, meditation, and deep breathing exercises can help reduce stress levels.",
      icon: <FaHeartbeat className="text-red-600 text-2xl" />,
    },
    {
      title: "Seeking Professional Help",
      description:
        "Therapy and counseling provide guidance and support for managing emotions and mental health conditions.",
      icon: <FaHandsHelping className="text-green-600 text-2xl" />,
    },
    {
      title: "Building Strong Relationships",
      description:
        "Having a supportive network of friends and family can improve emotional well-being.",
      icon: <FaUsers className="text-purple-600 text-2xl" />,
    },
    {
      title: "Maintaining a Healthy Lifestyle",
      description:
        "Regular exercise, a balanced diet, and good sleep habits contribute to better mental health.",
      icon: <FaDumbbell className="text-orange-600 text-2xl" />,
    },
    {
      title: "Raising Awareness & Reducing Stigma",
      description:
        "Educating people about mental health can help eliminate stigma and encourage open conversations.",
      icon: <FaSmile className="text-yellow-600 text-2xl" />,
    },
    {
      title: "Practicing Self-Care",
      description:
        "Engaging in activities you enjoy, such as hobbies or relaxation techniques, can improve mental health.",
      icon: <FaSpa className="text-pink-600 text-2xl" />,
    },
    {
      title: "Work-Life Balance",
      description:
        "Setting boundaries between work and personal life helps prevent burnout and mental exhaustion.",
      icon: <FaBalanceScale className="text-indigo-600 text-2xl" />,
    },
  ];

  return (
    <div className="p-6 max-w-full px-20 mx-auto h-auto bg-gray-100">
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Mental Health Awareness
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Taking care of your mental health is essential for overall well-being
          and happiness.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {awarenessPoints.map((point, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white flex items-start gap-4"
            >
              {point.icon}
              <div>
                <h3 className="font-semibold text-lg text-blue-600">
                  {point.title}
                </h3>
                <p className="text-gray-600 mt-2">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentalHealth;


// import { div } from "framer-motion/client";
// import React from "react";

// const MentalHealth = () => {
//   const awarenessPoints = [
//     {
//       title: "Recognizing the Importance of Mental Health",
//       description:
//         "Mental well-being is just as important as physical health. Prioritizing it leads to a balanced life.",
//     },
//     {
//       title: "Managing Stress Effectively",
//       description:
//         "Practicing mindfulness, meditation, and deep breathing exercises can help reduce stress levels.",
//     },
//     {
//       title: "Seeking Professional Help",
//       description:
//         "Therapy and counseling provide guidance and support for managing emotions and mental health conditions.",
//     },
//     {
//       title: "Building Strong Relationships",
//       description:
//         "Having a supportive network of friends and family can improve emotional well-being.",
//     },
//     {
//       title: "Maintaining a Healthy Lifestyle",
//       description:
//         "Regular exercise, a balanced diet, and good sleep habits contribute to better mental health.",
//     },
//     {
//       title: "Raising Awareness & Reducing Stigma",
//       description:
//         "Educating people about mental health can help eliminate stigma and encourage open conversations.",
//     },
//     {
//       title: "Practicing Self-Care",
//       description:
//         "Engaging in activities you enjoy, such as hobbies or relaxation techniques, can improve mental health.",
//     },
//     {
//       title: "Work-Life Balance",
//       description:
//         "Setting boundaries between work and personal life helps prevent burnout and mental exhaustion.",
//     },
//   ];

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-gray-100">
//       <div className="p-6 max-w-4xl mx-auto">
//         <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
//           Mental Health Awareness
//         </h2>
//         <p className="text-gray-600 text-center mb-8">
//           Taking care of your mental health is essential for overall well-being
//           and happiness.
//         </p>
//         <div className="grid md:grid-cols-2 gap-6">
//           {awarenessPoints.map((point, index) => (
//             <div
//               key={index}
//               className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white"
//             >
//               <h3 className="font-semibold text-lg text-blue-600">
//                 {point.title}
//               </h3>
//               <p className="text-gray-600 mt-2">{point.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MentalHealth;
