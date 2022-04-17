import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const handleUserSignIn = (event) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    event.preventDefault();
    navigate(from, { replace: true });
  };
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return alert(error?.message);
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
          <Link
            className="flex justify-center text-lg font-bold text-blue-500 hover:text-blue-800"
            to="/"
          >
            Forgot Password?
          </Link>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
