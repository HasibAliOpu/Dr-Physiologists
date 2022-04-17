import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, img, price, description } = service;
  const navigate = useNavigate();
  return (
    <div className="flex justify-center mt-4 ">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <img className="rounded-t-lg" src={img} alt="" />
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
          <h5 className=" text-xl font-medium  mb-2">
            Therapy Price:{" "}
            <span className="text-yellow-400">
              ${price}.0/<sub>mo</sub>{" "}
            </span>
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {description.slice(0, 270)}...
          </p>
          <button
            onClick={() => navigate(`/checkout/${id}`)}
            className="bg-blue-300 hover:bg-blue-500 font-mono font-semibold text-xl
           w-full p-2 rounded-full text-white"
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
