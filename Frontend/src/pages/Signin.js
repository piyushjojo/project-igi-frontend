import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import custLoginImg from "../assets/img.png";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../styles/Contact.css";
import patientService from "../services/patientService";
import { useDispatch } from "react-redux";
import { login } from "../slices/authSlice";

// import "../styles/Signin.css";

function Signin() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("PATIENT");

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
    const login_payload = { email, password };

    localStorage.clear();

    if (user == "PATIENT") {
      console.log("inside patient service");
      patientService.signin(login_payload).then(
        (response) => {
          console.log(email);
          console.log(password);
          console.log("success");
          console.log(response);
          dispatch(login());

          localStorage.setItem("token", response.data.token);
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("name", response.data.name);

          console.log(localStorage.getItem("id"));
          console.log(localStorage.getItem("name"));
          window.location.href = "/dashboard";
        },
        (error) => {
          toast.error("Invalid Credential...");
          document.getElementById("error").innerHTML =
            "&cross; Invalid Credentials";
          toast.error("invalid login");
          console.log(error);
          console.log("Error");
        }
      );
      // } else if (user == "MED") {
      //   medinchargeService.signin(login).then(
      //     (response) => {
      //       console.log(email);
      //       console.log(password);
      //       console.log("success");
      //       console.log(response);

      //       localStorage.setItem("token", response.data.token);
      //       localStorage.setItem("id", response.data.id);
      //       localStorage.setItem("name", response.data.name);

      //       console.log(localStorage.getItem("id"));
      //       console.log(localStorage.getItem("name"));
      //       window.location.href = "/dashboard";
      //     },
      //     (error) => {
      //       // alert("Invalid Login Details", error);
      //       document.getElementById("msg").innerHTML =
      //         "&cross; Invalid Credentials";
      //       toast.error("invalid login");
      //       console.log(error);
      //       console.log("Error");
      //     }
      //   );
      // } else {
      //   labinchargeService.signin(login).then(
      //     (response) => {
      //       console.log(email);
      //       console.log(password);
      //       console.log("success");
      //       console.log(response);

      //       localStorage.setItem("token", response.data.token);
      //       localStorage.setItem("id", response.data.id);
      //       localStorage.setItem("name", response.data.name);

      //       console.log(localStorage.getItem("id"));
      //       console.log(localStorage.getItem("name"));
      //       window.location.href = "/dashboard";
      //     },
      //     (error) => {
      //       // alert("Invalid Login Details", error);
      //       document.getElementById("msg").innerHTML =
      //         "&cross; Invalid Credentials";
      //       toast.error("invalid login");
      //       console.log(error);
      //       console.log("Error");
      //     }
      //   );
    }
  };

  return (
    <div className="bg-white">
      {/* <Navbar /> */}

      <div className="contact">
        <div
          className="leftSide"
          style={{ backgroundImage: `url(${custLoginImg})` }}
        >
          {/* //leftside */}
        </div>
        <div className="rightSide">
          <h3>Login</h3>

          <Form inline>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
              <Label className="me-sm-2" for="t_email_id">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="Enter Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
              <Label className="me-sm-2" for="t_password">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                placeholder="Enter Password"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <span id="error" className="text-danger"></span>
            <div className="">
              <Button
                disabled={email && password && user ? false : true}
                className="bg-black"
                onClick={handleClick}
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Signin;
