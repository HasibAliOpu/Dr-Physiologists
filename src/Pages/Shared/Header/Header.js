import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import CustomLink from "../../../CustomLink/CustomLink";
import auth from "../../../firebase.init";
import Logo from "../../../images/icon/logo.png";
const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div>
      <div className="flex items-center justify-between px-8 bg-blue-200">
        <span className="flex items-center">
          <img src={Logo} className="w-14 h-14" alt="" />
          <h1 className="text-xl text-blue-500">Dr Physiologists</h1>
        </span>

        <div className="flex font-medium mr-20">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/blogs">Blogs</CustomLink>
          {user ? (
            <button onClick={() => signOut(auth)}>Log Out</button>
          ) : (
            <CustomLink to="/login">Login</CustomLink>
          )}
          <p className="ml-2">{user?.displayName}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
