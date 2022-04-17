import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-700 text-center md:p-5 text-sm  text-slate-400">
      <h1>
        <FontAwesomeIcon icon={faCopyright} className="pr-1" />
        {new Date().getFullYear()} Dr.Physiologists. All rights reserved. Design
        by FWD_Opu
      </h1>
    </div>
  );
};

export default Footer;
