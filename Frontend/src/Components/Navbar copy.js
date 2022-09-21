import React, { useState } from "react";
import { Link } from "react-router-dom";
import patientService from "../services/patientService";
// import Logo from "../../public/logo.jpeg"
// import Logo from "../assets/logo.jpeg";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Dropdown from "react-bootstrap/Dropdown";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';

// import "../styles/Navbar.css";



const handleClick = () => {
      localStorage.clear();
      window.location.href = "/signin";
};

function Navbar2() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        {/* <img src={Logo} /> */}
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
      <div className="rightSide" style={{"justifyContent":"right"}}>
        <Link to="/"> Home </Link>
        <Link to="/order"> Order </Link>
        <Link to="/cart"> Cart </Link>

        <div className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
        </svg>
        </a>
        <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
          {/* <li><a className="dropdown-item" href="#">Profile</a></li> */}
          {/* <li><a className="dropdown-item" href="#">ABCD</a></li> */}
          {/* <li><hr className="dropdown-divider"/></li> */}


          
          <Link className="dropdown-item" to="/profile">
            Profile
          </Link>
          <Link onClick={handleClick} className="dropdown-item" to="/signout">
            Sign Out
          </Link>

          
        </ul>
      </div>

        <button onClick={toggleNavbar}>Reorder</button>
      </div>
    </div>


)  
}
export default Navbar2;
