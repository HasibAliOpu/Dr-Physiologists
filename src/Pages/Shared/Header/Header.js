import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import CustomLink from "../../../CustomLink/CustomLink";
import auth from "../../../firebase.init";
import Logo from "../../../images/icon/logo.png";
const Header = () => {
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  return (
    <div className={`${open ? "mb-60" : ""}`}>
      <div
        onClick={() => setOpen(!open)}
        className="md:hidden text-2xl pl-2 bg-blue-200"
      >
        {open ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
      <div
        className={`md:flex items-center justify-between px-8 bg-blue-200 md:static w-full absolute ${
          open ? "top-18" : "top-[-300px]"
        }`}
      >
        <span className="md:flex items-center">
          <img src={Logo} className="w-14 h-14" alt="" />
          <h1 className="text-xl text-blue-500">Dr Physiologists</h1>
        </span>

        <div className="md:flex font-medium text-lg text-blue-600  mr-20">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/blogs">Blogs</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          {user ? (
            <button onClick={() => signOut(auth)}>Log Out</button>
          ) : (
            <CustomLink to="/login">Login</CustomLink>
          )}
          <p className="ml-2 text-slate-600">{user?.displayName}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
