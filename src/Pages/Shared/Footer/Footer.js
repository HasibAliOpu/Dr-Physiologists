import React from "react";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../../images/icon/logo.png";
import CustomLink from "../../../CustomLink/CustomLink";

const Footer = () => {
  return (
    <div className="bg-slate-800 w-full">
      <div className="flex justify-center items-center gap-6 pt-4">
        <img src={Logo} alt="" className="w-1/12" />
        <div className="text-white md:flex gap-8 text-xs md:text-lg">
          <CustomLink to="/">HOME</CustomLink>
          <CustomLink to="/blogs">Blogs</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/login">Login</CustomLink>
          <CustomLink to="/register">Register</CustomLink>
        </div>
      </div>
      <div className="text-center text-white text-xs md:text-xl">
        <h1>OUR OFFICES</h1>
        <div className="flex justify-center gap-6 mt-6">
          <p className="border-r-2 pr-3 hover:text-orange-400">SINGAPORE</p>
          <p className="border-r-2 pr-3 hover:text-purple-400">AUSTRALIA</p>
          <p className="hover:text-cyan-400">CANADA</p>
        </div>
      </div>
      <div className="text-slate-400 flex justify-between mt-5 px-9 py-1 bg-slate-900">
        <span>
          <h1>
            Copyright <FontAwesomeIcon icon={faCopyright} />
            {new Date().getFullYear()} Dr Physiologists
          </h1>
        </span>
        <span>Design By FWD Opu</span>
      </div>
    </div>
  );
};

export default Footer;
