import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckOut = () => {
  const { checkoutId } = useParams();
  /* const [service, setService] = useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("services.json");
      response = await response.json();
      setService(response);
    }

    fetchMyAPI();
  }, []); */

  const handleUserSubmit = () => {
    toast("Thank Your for booking");
  };

  return (
    <div>
      <div className="md:w-1/2  mx-auto md:px-16">
        <h1 className="text-center text-3xl my-3">User Information</h1>
        <form
          onSubmit={handleUserSubmit}
          className="bg-blue-200 shadow-md rounded p-8 my-4 font-mono"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor="Your Name"
            >
              Your Name
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-xl font-bold  mb-2"
              htmlFor="home-address"
            >
              Home Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-xl font-bold  mb-2"
              htmlFor="phone-number"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              required
            />
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl rounded 
            w-full h-12"
          >
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default CheckOut;
