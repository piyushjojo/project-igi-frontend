import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "../styles/Sidebar.css";
import patientService from "../services/patientService";

export default () => {
  const handleClick = () => {
    patientService.signout().then(
      (response) => {
        console.log("success");
        console.log(response);
        localStorage.clear();
        window.location.href = "/patient/signin";
      },
      (error) => {
        toast.error("invalid login");
        console.log(error);
        console.log("Error");
      }
    );
  };

  return (
    <Menu>
      <div className="rightSide">
        <div>
          <Link to="/"> Home </Link>
        </div>
        <div>
          <Link to="/profile"> Profile </Link>
        </div>
        <div>
          <Link to="/order"> Order </Link>
        </div>
        <div>
          <Link to="/cart"> Cart </Link>
        </div>
        <div>
          <button onClick={handleClick}>Log Out</button>
        </div>
      </div>
    </Menu>
  );
};
