import React from "react";
import pic1 from "../assets/health_tips/mental_health.webp";
import pic2 from "../assets/health_tips/jogging.jpg";
import pic3 from "../assets/health_tips/playing.jpg";
import pic4 from "../assets/health_tips/wearing_mask.webp";
import pic5 from "../assets/health_tips/pic3.webp";
import pic6 from "../assets/health_tips/pic1.webp";
import { Link } from "react-router-dom";

const HealthTipsBlog = () => {
  const blogs = [
    {
      image: pic2,
      title: "5 Tips for a Healthy Lifestyle",
      description: "Learn how to maintain a balanced diet and stay active.",
      link: "/tips/tips1",
    },
    {
      image: pic4,
      title: "How to Prevent Common Diseases",
      description: "A guide to strengthening your immunity and staying safe.",
      link: "/tips/tips2",
    },
    {
      image: pic3,
      title: "The Importance of Daily Exercise",
      description: "Discover the benefits of working out regularly.",
      link: "/tips/tips3",
    },
    {
      image: pic6,
      title: "Regular Health Check-ups Matter",
      description: "Why routine health screenings are crucial for long life.",
      link: "/tips/tips4",
    },
    {
      image: pic1,
      title: "Mental Health Awareness",
      description: "Understanding stress, anxiety, and ways to cope.",
      link: "/tips/tips5",
    },
    {
      image: pic5,
      title: "Best Nutritional Habits",
      description: "A guide to eating healthy for a better lifestyle.",
      link: "/tips/tips6",
    },
  ];

  return (
    <div className="bg-gray-100 rounded-2xl shadow-2xl  min-h-screen py-10 px-8">
      <h2 className="text-3xl font-bold  text-[#5f6FFF] underline text-center mb-8">
        Health Tips <span className="text-red-500">&</span> Blogs
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">
                {blog.title}
              </h3>
              <p className="text-gray-600 mt-2">{blog.description}</p>
              <Link
                to={blog.link}
                className="inline-block mt-4 text-blue-600 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthTipsBlog;
