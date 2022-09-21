import React, { useState } from "react";
import { Link } from 'react-router-dom';
// import Logo from "../../public/logo.jpeg"
import Logo from "../assets/logo.jpeg"

import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" style={{"justifyContent" : "left"}} id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        {/* <span className="text-white">E-Pharma</span> */}
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/menu"> Services </Link>
          <Link to="/contact"> Login </Link>
          <Link to="/register"> Register </Link>
          <Link to="/custLogin">custLogin</Link>
        </div>
      </div>
      <div className="rightSide" style={{"justifyContent" : "right"}}>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/menu"> Services </Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Register</Link>

        <button onClick={toggleNavbar}>Reorder</button>
      </div>
    </div>
  );
}

export default Navbar;

/*
<div className="leftSide" id={openLinks ? "open" : "close"}>
        {/* <img src={Logo} /> */ //}
{
  /* <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/menu"> Services </Link>
          <Link to="/patient/signin"> SignIn </Link>
          <Link to="/register"> Register </Link>
          <Link to="/custLogin">custLogin</Link>
        </div> */
}
//</div>

//*/
