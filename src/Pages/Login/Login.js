import React, { useEffect, useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  const handleUserSignIn = (event) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    event.preventDefault();
    toast("Sent email");
  };
  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast("Sending Email");
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  let errorText;
  if (loading) {
    return <Loading />;
  }
  if (error || resetError) {
    errorText = (
      <p className="text-red-600 text-center">
        {error?.message} {resetError?.message}
      </p>
    );
  }

  return (
    <div>
      <div className="md:w-1/2  mx-auto md:px-16">
        <div className="bg-blue-200 shadow-md rounded p-8 my-4 font-mono">
          <h1 className="text-center text-3xl">Please Login</h1>
          <form onSubmit={handleUserSignIn}>
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

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl rounded focus:outline-none focus:shadow-outline w-full h-12">
              Log In
            </button>
          </form>
          <p className="text-center my-2">
            New To Dr.Physiologist?{" "}
            <Link
              to="/register"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Create New Account
            </Link>{" "}
          </p>
          <button
            onClick={handleResetPassword}
            className="block mx-auto my-2 text-lg font-bold text-blue-500 hover:text-blue-800"
          >
            Forgot Password?
          </button>
          {errorText}
          <SocialLogin />
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
