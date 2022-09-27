import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import custLoginImg from "../assets/login.jpg";
import Footer from "../Components/Footer";
// import Navbar from "../Components/Navbar copy";
import Navbar from "../Components/Navbar";
import "../styles/Contact.css";
import patientService from "../services/patientService";
// use the dispatch to update the redux store about the signin state
import { useDispatch } from "react-redux";
import { login } from "../slices/authSlice";
// import "../styles/Test.css";

function Test() {
  const dispatch = useDispatch();

  // get the navigate function reference
  // const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("PATIENT");
  const navigate = useNavigate();

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
          dispatch(login());

          localStorage.setItem("token", response.data.token);
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("name", response.data.name);
          localStorage.setItem("wallet", response.data.wallet);

          // window.location.href = "/dashboard";
          toast.success("welcome to Site");
          navigate("/dashboard");
        },
        (error) => {
          // alert("Invalid Login Details", error);
          document.getElementById("error").innerHTML =
            "&cross; Invalid Credentials";
          //   toast.error("invalid login");
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
          style={{ backgroundImage: `url(${custLoginImg})` }}
        >
          {/* //leftside */}
        </div>
        <div
          className="rightSide"
          style={{
            "font-size": "larger",
            "font-weight": "bolder",
            "font-family": "serif",
          }}
        >
          <h1>Login</h1>

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
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <span id="error" className="text-danger"></span>
            <div className="">
              <Button
                disabled={email && password && user ? false : true}
                className="bg-dark text-white"
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
export default Test;
