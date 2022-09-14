import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
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

import "../styles/Contact.css";

function MedInchargeLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    const login = { email, password };

    axios.post(`http://localhost:8080/labincharge/signin`, login).then(
      (response) => {
        console.log(email);
        console.log(password);
        console.log("success");
        console.log(response);

        localStorage.setItem("mi_id", response.data.id);
        localStorage.setItem("mi_name", response.data.name);

        console.log(localStorage.getItem("mi_id"));
        console.log(localStorage.getItem("mi_name"));
        window.location.href = "/medincharge/dashboard";
      },
      (error) => {
        alert("Invalid Login Details", error);
        toast.error("invalid login");
        console.log(error);
        console.log("Error");
      }
    );
  };

  return (
    <div className="col-5 container-fluid border border-3">
      {/* </Navbar> */}
      <div className="contact">
        <div className="rightSide">
          <h1> Med Incharge Login</h1>

          <Form>
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
            <div className="text-center">
              <Button
                disabled={email && password ? false : true}
                className="btn btn-primary"
                onClick={handleClick}
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default MedInchargeLogin;
