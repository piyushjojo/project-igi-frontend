import patientService from "../services/patientService";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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
import { waitFor } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import Navbar2 from "../Components/Navbar copy";
import Footer from "../Components/Footer";
import { toast } from "react-toastify";

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg1, setMsg1] = useState("");
  const [msg2, setMsg2] = useState("");
  const [msg3, setMsg3] = useState("");
  const [msg, setMsg] = useState("");
  const [checkonp, setCheckonp] = useState(false);
  const [checkcnp, setCheckcnp] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const navigate = useNavigate();

  //   var checkOldNew = () => {
  //     console.log("in  check old new password");
  //     if (oldPassword === newPassword) {
  //       setMsg("old and new password must not be same.");
  //       return false;
  //     }
  //     return true;
  //   };

  //   var confirmNew = () => {
  //     console.log("in confirm new password");

  //     if (newPassword !== confirmPassword) {
  //       setMsg("new and confirm password must be same.");
  //       return false;
  //     }
  //     return true;
  //   };

  const validateNewPassword = (e) => {
    //Password : contain at least 1 Capital Letter, 1 small Letter,1 Special Symbol,1 Number and contain minimum 8 to 15 charecters only
    if (
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,15}$/.test(
        e.target.value
      )
    ) {
      // ^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$
      console.log("valid password");
      setNewPassword(e.target.value);
    } else {
      console.log("Invalid Passowrd");
      document.getElementById("msg").innerHTML =
        "&cross; 1 Capital 1 small ,1 Special ,\n1 Number Length 8-15 chars";
      document.getElementById("msg").style.color = "red";

      // document.getElementById("submit-btn").disabled = true;
      // setValidPassword(false);
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
      // setMsg1("New Password and Confirm Password should be same")
      document.getElementById("msg1").innerHTML =
        "&cross; New Password and Confirm Password should be same";
      setCheckcnp(false);
    }
    if (oldPassword === newPassword) {
      // setMsg("&cross; New Password can not be same as Old password")
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

  var newPassword_confirmPassword_isEqual = () => {
    console.log("Inside pas check...");
    if (oldPassword != newPassword) {
      document.getElementById("msg1").innerHTML =
        "&cross; New Password and Confirm Password should be same";
    }
    if (oldPassword === newPassword) {
      document.getElementById("msg1").innerHTML = "";
    }
  };

  return (
    <div>
      <div>
        <Navbar2 />
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

                // onBlurCapture={(e) => newPassword_confirmPassword_isEqual(e.target.value)}
                //   onBlur={checkOldNew}
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
                // onBlurCapture={(e) => newPassword_confirmPassword_isEqual(e.target.value)}
                //   onBlur={confirmNew}
              />
              <p className="text-danger" id="msg">
                {msg}
              </p>
              <p className="text-danger" id="msg1">
                {msg1}
              </p>
            </FormGroup>
            {/* <span className="message">{msg1}</span>
          <span className="message">{msg2}</span>
          <span className="message">{msg3}</span> */}
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

        <Footer />
      </div>
    </div>
  );
}

export default ChangePassword;
