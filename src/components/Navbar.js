import React from "react";
import netflixLogo from "../Img/icons8-netflix-logo.svg";

function Navbar() {
  return (
    <div className="absolute w-full px-28 bg-gradient-to-b from-black z-10">
      <img src={netflixLogo} alt="logo" className="w-36" />
    </div>
  );
}

export default Navbar;
