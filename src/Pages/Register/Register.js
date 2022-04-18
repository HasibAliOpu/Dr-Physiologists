import React, { useRef } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const handleCreateUser = async (event) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    event.preventDefault();
  };
  let errorText;
  if (error || updateError) {
    errorText = (
      <p className="text-center text-red-600">
        {error?.message} {updateError?.message}
      </p>
    );
  }
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading || updating) {
    return <Loading />;
  }
  return (
    <div>
      <div className="md:w-1/2  mx-auto md:px-16">
        <h1 className="text-center text-3xl my-3">Please Register</h1>
        <form
          onSubmit={handleCreateUser}
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
              ref={nameRef}
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
              ref={emailRef}
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
              ref={passwordRef}
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
          {errorText}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl rounded 
            w-full h-12"
          >
            Register
          </button>
          <p className="text-center my-2">
            Already Have An Account?{" "}
            <Link
              to="/login"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Login
            </Link>{" "}
          </p>
          <SocialLogin />
        </form>
      </div>
    </div>
  );
};

export default Register;
