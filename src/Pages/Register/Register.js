import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link } from "react-router-dom";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  return (
    <div>
      <div className="md:w-1/2  mx-auto md:px-16">
        <h1 className="text-center text-3xl my-3">Please Register</h1>
        <form className="bg-blue-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 font-mono">
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
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              required
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-blue-600"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-medium text-gray-900">
                I agree with the{" "}
                <button className="text-blue-600 hover:underline dark:text-blue-500">
                  terms and conditions
                </button>
              </label>
            </div>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl rounded focus:outline-none focus:shadow-outline w-full h-12 block "
            type="button"
          >
            Register
          </button>
          <p className="text-center my-2 font-san">
            Already Have An Account?{" "}
            <Link
              to="/login"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Login
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
