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

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg1, setMsg1] = useState("");
  const [msg2, setMsg2] = useState("");
  const [msg3, setMsg3] = useState("");
  const [msg, setMsg] = useState("");
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

  useEffect(() => {
    console.log("in new confirm password check ");
    if (
      oldPassword.length == 0 ||
      newPassword.length == 0 ||
      confirmPassword.length == 0
    ) {
      setMsg1("password can not be null");
    } else {
      setMsg1("");
    }
    if (oldPassword === newPassword || oldPassword === confirmPassword) {
      setMsg2("old and new password can not be same.");
    } else if (newPassword !== confirmPassword) {
      setMsg3("new and confirm password must be same.");
    } else {
      if (newPassword == confirmPassword) {
        setButtonActive(true);
      }
      setMsg2("");
      setMsg3("");
    }
  }, [oldPassword, newPassword, confirmPassword, buttonActive]);

  const handleClick = () => {
    const password = { oldPassword, newPassword };
    console.log("handle click called");

    patientService
      .changePassword(password, localStorage.getItem("id"))
      .then(setMsg("password changed successfully. Login again."))
      .then(localStorage.clear())
      .then(
        setTimeout(() => {
          navigate("/patient/signin");
        }, 5000)
      )
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div>
      <div>
        <Form>
          <FormGroup className="mb-2 me-sm-2 mb-sm-0">
            <Input
              id="oldPassword"
              name="oldPassword"
              placeholder="enter current password"
              type="text"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="mb-2 me-sm-2 mb-sm-0">
            <Input
              id="newPassword"
              name="newPassword"
              placeholder="enter new password"
              type="text"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              //   onBlur={checkOldNew}
            />
          </FormGroup>
          <FormGroup className="mb-2 me-sm-2 mb-sm-0">
            <Input
              id="confirmPassword"
              name="confirmPassword"
              placeholder="confirm new password"
              type="text"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              //   onBlur={confirmNew}
            />
          </FormGroup>
          <span className="message">{msg1}</span>
          <span className="message">{msg2}</span>
          <span className="message">{msg3}</span>
          <div className="text-center">
            <Button
              disabled={
                oldPassword && newPassword && confirmPassword ? false : true
              }
              className="btn btn-primary"
              onClick={handleClick}
            >
              Submit
            </Button>
          </div>
          <span className="message">{msg}</span>
        </Form>
      </div>
    </div>
  );
}

export default ChangePassword;
