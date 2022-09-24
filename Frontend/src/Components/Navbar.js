import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Logo from "../../public/logo.jpeg"
import Logo from "../assets/logo.jpeg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "../styles/Navbar.css";
import Test from "../pages/Test";
import PatientSignUp from "../pages/PatientSignUp";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div
        className="leftSide"
        style={{ justifyContent: "left" }}
        id={openLinks ? "open" : "close"}
      >
        <img src={Logo} />
        {/* <span className="text-white">E-Pharma</span> */}
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/services"> Services </Link>
          <Link to="/contact"> Login </Link>
          <Link to="/register"> Register </Link>
          {/* <Link to="/custLogin">custLogin</Link> */}
        </div>
      </div>
      <div className="rightSide" style={{ justifyContent: "right" }}>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/services"> Services </Link>
        <Link to="/signin">Sign In</Link>
        {/* <Link to="/signup">Register</Link> */}
        <span className="text-white" onClick={handleShow}>
          Register
        </span>
        {/* <SigninModal /> */}
        {/* <button type="button" class="btn btn-outline-dark">Dark</button> */}
        <button onClick={toggleNavbar}>Reorder</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header>
          <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <h1>Register</h1>
          <PatientSignUp />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
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
