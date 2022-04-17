import React from "react";
import github from "../../images/icon/github.png";
import google from "../../images/icon/google.png";

const SocialLogin = () => {
  return (
    <div>
      <div className="flex items-center mx-2">
        <div style={{ height: "1px" }} className="w-1/2 bg-blue-600"></div>
        <p className="mx-4 font-semibold text-blue-900">OR</p>
        <div style={{ height: "1px" }} className="w-1/2 bg-blue-600"></div>
      </div>
      <button
        className="flex justify-center items-center gap-2 my-2 py-3 w-full mx-auto bg-white
       border border-slate-500 rounded-md font-semibold"
      >
        <img src={google} alt="" />
        Continue with Google
      </button>
      <button
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
