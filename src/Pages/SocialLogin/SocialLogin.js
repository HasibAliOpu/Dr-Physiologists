import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import github from "../../images/icon/github.png";
import google from "../../images/icon/google.png";
import Loading from "../Loading/Loading";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const handleSignInWithGoogle = () => {
    signInWithGoogle();
  };
  const handleSignInWithGithub = () => {
    signInWithGithub();
  };
  if (githubUser || googleUser) {
    navigate(from, { replace: true });
  }
  if (googleLoading || githubLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="flex items-center mx-2">
        <div style={{ height: "1px" }} className="w-1/2 bg-blue-600"></div>
        <p className="mx-4 font-semibold text-blue-900">OR</p>
        <div style={{ height: "1px" }} className="w-1/2 bg-blue-600"></div>
      </div>
      <button
        onClick={handleSignInWithGoogle}
        className="flex justify-center items-center gap-2 my-2 py-3 w-full mx-auto bg-white
       border border-slate-500 rounded-md font-semibold"
      >
        <img src={google} alt="" />
        Continue with Google
      </button>
      <button
        onClick={handleSignInWithGithub}
        className="flex justify-center items-center gap-2 py-3 w-full mx-auto bg-white
       border border-slate-500 rounded-md font-semibold"
      >
        <img src={github} alt="" />
        Continue with Github
      </button>
    </div>
  );
};

export default SocialLogin;
