import React from "react";
import { diseasesAndSymptoms } from "../assets/assets_frontend/assets.js";
import { Link } from "react-router-dom";

const DiseasesAndSymptoms = () => {
  return (
    <div>
      {/* <div className="w-full grid grid-cols-auto  grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0 ">
        {doctors &&
          doctors.slice(0, 10).map((item, index) => (
            <div
              onClick={() => {
                navigate(`/appointment/${item._id}`), scrollTo(0, 0);
              }}
              key={index}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img className="bg-blue-50 " src={item.image} alt="" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p
                    className={`w-2 h-2 rounded-full ${
                      item.available ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></p>
                  <p
                    className={` ${
                      item.available ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {item.available ? "Available" : "Unavailable"}
                  </p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm ">{item.speciality}</p>
              </div>
            </div>
          ))}
      </div> */}

      {/* <div className="flex flex-row sm:justify-center gap-4 pt-5 w-full overflow-scroll "> */}
      <div className="w-full grid grid-cols-auto  grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {diseasesAndSymptoms &&
          diseasesAndSymptoms.map((item, index) => (
            <div className="border border-amber-300 px-10 py-6 rounded-xl shadow-xl  hover:scale-105">
              <Link
                onClick={() => scrollTo(0, 0)}
                className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
                key={index}
                to={`/doctors/${item.speciality}`}
              >
                <img className="w-16 sm:w-24 mb-2" src={item.image} alt="" />
                <p className="text-[18px] text-blue-700 font-bold">
                  <span className="text-red-500">Book Appointment with -</span>{" "}
                  {item.speciality}
                </p>
                <div className=" mt-4 ">
                  <p className="uppercase underline font-semibold text-lg text-center  text-red-500">
                    Symptoms
                  </p>
                  <ul className="mt-2">
                    {item.diseases.map((disease, index) => (
                      <li
                        className="list-disc text-[15px] text-blue-400"
                        key={index}
                      >
                        {disease}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DiseasesAndSymptoms;
