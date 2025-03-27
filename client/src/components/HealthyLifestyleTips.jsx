import React from "react";

const HealthyLifestyleTips = () => {
  const tips = [
    {
      id: 1,
      title: "Eat a Balanced Diet",
      description:
        "Consume a variety of foods, including vegetables, fruits, and lean proteins.",
      icon: "🥗",
    },
    {
      id: 2,
      title: "Stay Hydrated",
      description:
        "Drink at least 8 glasses of water daily to keep your body hydrated.",
      icon: "💧",
    },
    {
      id: 3,
      title: "Exercise Regularly",
      description:
        "Engage in at least 30 minutes of physical activity every day.",
      icon: "🏃‍♂️",
    },
    {
      id: 4,
      title: "Get Enough Sleep",
      description:
        "Aim for 7-9 hours of quality sleep each night for better health.",
      icon: "🛌",
    },
    {
      id: 5,
      title: "Manage Stress",
      description:
        "Practice mindfulness, meditation, or deep breathing exercises.",
      icon: "🧘",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen h-auto flex flex-col items-center py-10 px-4">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        5 Tips for a Healthy Lifestyle
      </h2>
      <div className="max-w-4xl grid md:grid-cols-2 gap-6">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white rounded-2xl shadow-lg p-5 flex items-center gap-4 transition-transform duration-300 hover:scale-105"
          >
            <span className="text-4xl">{tip.icon}</span>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {tip.title}
              </h3>
              <p className="text-gray-600 mt-1">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthyLifestyleTips;
