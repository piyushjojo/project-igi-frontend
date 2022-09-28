import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
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
import LoginImg from "../assets/login1.jpg";
// import Navbar from "../Components/Navbar copy";
import "../styles/Contact.css";
import patientService from "../services/patientService";
import medinchargeService from "../services/medinchargeService";
// use the dispatch to update the redux store about the signin state
import { useDispatch } from "react-redux";
import { login } from "../slices/authSlice";
// import "../styles/Test.css";

function Signin() {
  const dispatch = useDispatch();

  // get the navigate function reference
  // const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  function prof(val) {
    console.log("in - prof");

    if (val == "PATIENT") {
      setUser("PATIENT");
    } else if (val == "MED") {
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
          dispatch(login());

          localStorage.setItem("token", response.data.token);
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("name", response.data.name);
          localStorage.setItem("wallet", response.data.wallet);
          localStorage.setItem("role", "patient");

          // window.location.href = "/dashboard";
          toast.success("welcome to Site");
          navigate("/dashboard");
        },
        (error) => {
          // alert("Invalid Login Details", error);
          document.getElementById("error").innerHTML =
            "&cross; Invalid Credentials";
          toast.error("Invalid Credentials");
          console.log(error);
          console.log("Error");
        }
      );
    } else if (user == "MED") {
      console.log("inside patient service");
      medinchargeService.signin(login_payload).then(
        (response) => {
          dispatch(login());

          localStorage.setItem("token", response.data.token);
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("name", response.data.name);
          // localStorage.setItem("wallet", response.data.wallet);
          localStorage.setItem("role", "med");

          // window.location.href = "/dashboard";
          toast.success("welcome to Site");
          navigate("/meddashboard");
        },
        (error) => {
          // alert("Invalid Login Details", error);
          // document.getElementById("error").innerHTML =
          //   "&cross; Invalid Credentials";
          toast.error("Invalid Credentials");
          console.log(error);
          console.log("Error");
        }
      );
    }
  };

  return (
    <div>
      <div className="contact border border-5 ">
        <div
          className="leftSide  border-5"
          style={{ backgroundImage: `url(${LoginImg})` }}
        >
          {/* //leftside */}
        </div>
        <div
          className="rightSide text-center"
          style={{
            "font-size": "larger",
            "font-weight": "bolder",
            "font-family": "serif",
          }}
        >
          <Form
            inline
            className="col-7 container border border-success shadow-lg"
          >
            <h2>Login</h2>

            <FormGroup>
              <div className="input-container">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className={email && "filled"} htmlFor="email">
                  Email
                </label>
              </div>
            </FormGroup>
            <FormGroup>
              <div className="input-container">
                <input
                  id="password"
                  name="password"
                  // placeholder="Enter Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className={password && "filled"} htmlFor="password">
                  Password
                </label>
              </div>
            </FormGroup>
            <FormGroup>
              <div>
                <div className="input-container">
                  <select onChange={(e) => prof(e.target.value)}>
                    <option value=""></option>
                    <option value="PATIENT">Patient</option>
                    <option value="MED">Incharge</option>
                  </select>
                  <label className={user && "filled"} htmlFor="role">
                    Who are you ?
                  </label>
                </div>
              </div>
            </FormGroup>
            <span id="error" className="text-danger"></span>
            <div className="">
              <Button
                disabled={email && password && user ? false : true}
                className="bg-dark text-white text-center"
                onClick={handleClick}
              >
                SignIn
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Signin;
