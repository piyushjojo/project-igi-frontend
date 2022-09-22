import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import patientService from "../services/patientService";
import medinchargeService from "../services/medinchargeService";
import labinchargeService from "../services/labinchargeService";

import "../styles/Contact.css";
// ==============================

function PatientLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  function prof(val) {
    console.log("in - prof");

    if (val == "PATIENT") {
      setUser("PATIENT");
    } else if (val == "LAB") {
      setUser("LAB");
    } else {
      setUser("MED");
    }
  }

  const handleClick = () => {
    const login = { email, password };

    localStorage.clear();

    if (user == "PATIENT") {
      console.log("inside patient service");
      patientService.signin(login).then(
        (response) => {
          console.log(email);
          console.log(password);
          console.log("success");
          console.log(response);

          localStorage.setItem("token", response.data.token);
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("name", response.data.name);

          console.log(localStorage.getItem("id"));
          console.log(localStorage.getItem("name"));
          window.location.href = "/dashboard";
        },
        (error) => {
          // alert("Invalid Login Details", error);
          document.getElementById("msg").innerHTML =
            "&cross; Invalid Credentials";
          toast.error("invalid login");
          console.log(error);
          console.log("Error");
        }
      );
    } else if (user == "MED") {
      medinchargeService.signin(login).then(
        (response) => {
          console.log(email);
          console.log(password);
          console.log("success");
          console.log(response);

          localStorage.setItem("token", response.data.token);
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("name", response.data.name);

          console.log(localStorage.getItem("id"));
          console.log(localStorage.getItem("name"));
          window.location.href = "/dashboard";
        },
        (error) => {
          // alert("Invalid Login Details", error);
          document.getElementById("msg").innerHTML =
            "&cross; Invalid Credentials";
          toast.error("invalid login");
          console.log(error);
          console.log("Error");
        }
      );
    } else {
      labinchargeService.signin(login).then(
        (response) => {
          console.log(email);
          console.log(password);
          console.log("success");
          console.log(response);

          localStorage.setItem("token", response.data.token);
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("name", response.data.name);

          console.log(localStorage.getItem("id"));
          console.log(localStorage.getItem("name"));
          window.location.href = "/dashboard";
        },
        (error) => {
          // alert("Invalid Login Details", error);
          document.getElementById("msg").innerHTML =
            "&cross; Invalid Credentials";
          toast.error("invalid login");
          console.log(error);
          console.log("Error");
        }
      );
    }

    // axios.post(`http://localhost:8080/patient/signin`, login)
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="col-4 center container-fluid h-50 my-4 ">
        {/* </Navbar> */}
        <div className="">
          <div className="rightSide">
            {/* <h1>SignIn</h1> */}

            <Form className="border border-3 border-dark ">
            <h1>SignIn</h1>
              <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                <Input
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="my-4 me-sm-2 mb-sm-0">
                <Input
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <div className="my-4 me-sm-2 mb-sm-0">
                  <select onChange={(e) => prof(e.target.value)}>
                    <option>--SELECT--</option>
                    <option value="PATIENT">Patient</option>
                    <option value="LAB">Lab Incharge</option>
                    <option value="MED">Medicine</option>
                  </select>
                </div>
              </FormGroup>
              <div>
                <span className="text-danger" id="msg"></span>
              </div>
              <div className="">
                <Button 
                  disabled={email && password && user ? false : true}
                  className="btn btn-dark"
                  onClick={handleClick}
                >
                  Submit
                </Button>
              </div>
              <div className="py-4 link-secondary">
                Don't have an account ? <Link to="/signup">Sign Up</Link>
              </div>
            </Form>
          </div>
        </div>
        {/* <Footer/> */}
      </div>
      <Footer></Footer>
    </>
  );
}

export default PatientLogin;
