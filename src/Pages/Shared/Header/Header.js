import React from "react";
import CustomLink from "../../../CustomLink/CustomLink";
import Logo from "../../../images/icon/logo.png";
const Header = () => {
  return (
    <div>
      <div className="bg-teal-300 flex items-center justify-between px-8">
        <img src={Logo} className="w-16 h-16" alt="" />
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
