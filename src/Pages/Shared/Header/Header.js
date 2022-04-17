import React from "react";
import CustomLink from "../../../CustomLink/CustomLink";
import Logo from "../../../images/icon/logo.png";
const Header = () => {
  return (
    <div>
      <div className=" flex items-center justify-between px-8">
        <span className="flex items-center">
          <img src={Logo} className="w-14 h-14" alt="" />
          <h1 className="text-xl text-blue-500">Dr Physiologists</h1>
        </span>

        <div className="flex font-medium mr-20">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/blogs">Blogs</CustomLink>
          <CustomLink to="/login">Login</CustomLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
