import patientService from "../services/patientService";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";

import Footer from "../Components/Footer";
import { toast } from "react-toastify";

function ChangePassword() {
  if (localStorage.getItem("id") == null) {
    window.location.href = "/signin";
  }
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg1, setMsg1] = useState("");
  const [msg, setMsg] = useState("");
  const [checkonp, setCheckonp] = useState(false);
  const [checkcnp, setCheckcnp] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const navigate = useNavigate();

  const validateNewPassword = (e) => {
    if (
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,15}$/.test(
        e.target.value
      )
    ) {
      console.log("valid password");
      setNewPassword(e.target.value);
    } else {
      console.log("Invalid Passowrd");
      document.getElementById("msg").innerHTML =
        "&cross; 1 Capital 1 small ,1 Special ,\n1 Number Length 8-15 chars";
      document.getElementById("msg").style.color = "red";
    }
  };

  useEffect(() => {
    console.log("in new confirm password check ");
    console.log(
      "Old Password : " +
        oldPassword +
        " New Pass : " +
        newPassword +
        " confirm pas : " +
        confirmPassword
    );

    if (newPassword === confirmPassword) {
      document.getElementById("msg1").innerHTML = "";
      setCheckcnp(true);
    } else {
      document.getElementById("msg1").innerHTML =
        "&cross; New Password and Confirm Password should be same";
      setCheckcnp(false);
    }
    if (oldPassword === newPassword) {
      document.getElementById("msg").innerHTML =
        "&cross; New Password can not be same as Old password";
      setCheckonp(false);
    } else {
      document.getElementById("msg").innerHTML = "";
      setCheckonp(true);
    }

    if (newPassword == "" || oldPassword == "") {
      document.getElementById("msg").innerHTML = "";
      setCheckonp(false);
    }
  }, [oldPassword, newPassword, confirmPassword, buttonActive]);

  const handleClick = () => {
    const password = { oldPassword, newPassword };
    console.log("handle click called");

    patientService
      .changePassword(password, localStorage.getItem("id"))
      .then(toast.success("Successfully changed password"))
      .then(localStorage.clear())
      .then(
        setTimeout(() => {
          navigate("/signin");
        }, 5000)
      )
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div>
      <div>
        <div className="container-fluid col-6">
          <Form>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
              <Input
                id="oldPassword"
                name="oldPassword"
                placeholder="Enter current password"
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
              <Input
                id="newPassword"
                name="newPassword"
                placeholder="Enter new password"
                type="password"
                defaultValue={newPassword}
                onChange={validateNewPassword}
              />
            </FormGroup>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm new password"
                type="text"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <p className="text-danger" id="msg">
                {msg}
              </p>
              <p className="text-danger" id="msg1">
                {msg1}
              </p>
            </FormGroup>
            <div className="text-center">
              <Button
                disabled={!(checkcnp && checkonp)}
                className="btn btn-dark"
                onClick={handleClick}
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
