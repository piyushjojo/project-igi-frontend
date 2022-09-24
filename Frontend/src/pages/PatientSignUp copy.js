import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import patientService from "../services/patientService";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../styles/PatientSignup.css";
import Alert from "react-bootstrap/Alert";

// ========================================
const PatientSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone_no, setphone_no] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validPhone, setValidPhone] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [msg, setMsg] = useState("");

  const { id } = useParams();

  const savePatient = (e) => {
    e.preventDefault();

    const patient = {
      name,
      email,
      password,
      phone_no,
      address,
      address,
      dob,
      gender,
    };
    //create
    patientService
      .signup(patient)
      .then((response) => {
        console.log("patient added successfully", response.data);
        // window.location.href = "/patient/signin";
        setMsg("Patient Registered Successfully...");
        setTimeout(function () {
          window.location.href = "/patient/signin";
        }, 5000);
      })
      .catch((error) => {
        console.log("something went wroing", error);
      });
    // }
  };

  // ----------------------------------------------------

  // const validateMail = (e) => {
  // console.log("Inside validate email ")

  //   e.preventDefault();
  //   setEmail(e.target.value)
  //   patientService
  //     .checkMail(email)
  //     .then((response) => {
  //       console.log("patient added successfully", response.data);
  //       setValidEmail(true)
  //       return true;
  //     })
  //     .catch((error) => {
  //       console.log("something went wroing", error);
  //       setValidEmail(false)
  //       return false;
  //     });
  // };

  useEffect(() => {
    if (id) {
      patientService
        .get(id)
        .then((patient) => {
          setName(patient.data.name);
          setEmail(patient.data.email);
          setPassword(patient.data.password);
          setphone_no(patient.data.phone_no);
          setAddress(patient.data.address);
          setDob(patient.data.dob);
          setGender(patient.data.gender);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  // Final For Checking email in db 1
  const ValidateEmailFormat = (e) => {
    console.log("Inside validate email format");
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
      console.log("andar hu mai...");
      setEmail(e.target.value);
      console.log("e.target.value" + e.target.value + " : email " + email);
      patientService
        .checkMail(e.target.value)
        .then((response) => {
          console.log("patient added successfully", response.data);
          console.log("patient added successfully" + email);
          document.getElementById("email_span").innerHTML =
            "&check; Looks good";
          document.getElementById("email_span").style.color = "green";
          // document.getElementById("submit-btn").disabled = false;
          setValidEmail(true);
          return true;
        })
        .catch((error) => {
          console.log("something went wroing", error);
          // setemailAlreadyExist(true)
          document.getElementById("email_span").innerHTML =
            "&cross; email already in use";
          document.getElementById("email_span").style.color = "red";
          // document.getElementById("submit-btn").disabled = true;
          setValidEmail(false);

          return false;
        });
      // return (true)
    } else {
      console.log(
        "You have entered an invalid email address! " + e.target.value
      );
      // return (false)
    }
  };

  const validatePhoneNo = (e) => {
    if (/[1-9]{1}[0-9]{9}$/.test(e.target.value)) {
      setphone_no(e.target.value);
      document.getElementById("phone_span").innerHTML = "&check; ";
      document.getElementById("phone_span").style.color = "green";
      // document.getElementById("submit-btn").disabled = false;
      setValidPhone(true);
    } else {
      document.getElementById("phone_span").innerHTML =
        "&cross; Enter valid Mobile No";
      document.getElementById("phone_span").style.color = "red";
      // document.getElementById("submit-btn").disabled = true;
      setValidPhone(false);
    }
  };

  const validatePassword = (e) => {
    //Password : contain at least 1 Capital Letter, 1 small Letter,1 Special Symbol,1 Number and contain minimum 8 to 15 charecters only
    if (
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,15}$/.test(
        e.target.value
      )
    ) {
      // ^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$
      console.log("valid password");
      setPassword(e.target.value);
      // document.getElementById("submit-btn").disabled = false;
      document.getElementById("pass_span").innerHTML = "&check;";
      document.getElementById("pass_span").style.color = "green";
      setValidPassword(true);
    } else {
      console.log("Invalid Passowrd");
      document.getElementById("pass_span").innerHTML =
        "&cross; 1 Capital 1 small ,1 Special ,\n1 Number Length 8-15 chars";
      document.getElementById("pass_span").style.color = "red";

      // document.getElementById("submit-btn").disabled = true;
      setValidPassword(false);
    }
  };

  const randomMethod = (e) => {
    console.log(
      "check val  : email : pass : phone" +
        validEmail +
        validPassword +
        validPhone
    );
  };

  //================= Return ===================
  return (
    <>
      {/* <Navbar></Navbar> */}
      <div className="container ">
        <h3>Register</h3>

        <div className="row">
          <div className="col-8  baharvala-div">
            <form onSubmit={savePatient}>
              <table className="table table-borderless ">
                {/* <thead className="thead-dark"> */}

                <tr>
                  <th>Email</th>
                  <td>
                    <input
                      type="email"
                      id="email"
                      defaultValue={email}
                      onBlurCapture={ValidateEmailFormat}
                      // onBlur={alert("Hello")}
                      placeholder="Enter Email"
                      required="true"
                    />
                  </td>
                  <td>
                    <p
                      id="email_span"
                      className="fw-bolder fst-italic m-0 p-0"
                    ></p>
                  </td>
                </tr>
                <tr>
                  <th>Name</th>
                  <td>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onBlur={randomMethod}
                      placeholder="Enter Name"
                      required="true"
                    />
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <th>Password</th>
                  <td>
                    <input
                      type="text"
                      id="password"
                      defaultValue={password}
                      onBlur={validatePassword}
                      placeholder="Enter Password"
                      required="true"
                    />
                  </td>
                  <td>
                    <td>
                      <span
                        id="pass_span"
                        className="fw-bolder fst-italic m-0 p-0"
                      ></span>
                    </td>
                  </td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>
                    <input
                      type="tel"
                      // className="form-control col-4 border-bottom"
                      id="phone_no"
                      defaultValue={phone_no}
                      onBlur={validatePhoneNo}
                      placeholder="Enter Phone Number"
                      required="true"
                    />
                  </td>
                  <td>
                    <span
                      id="phone_span"
                      className="fw-bolder fst-italic m-0 p-0"
                    ></span>
                  </td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>
                    <input
                      type="text"
                      // className="form-control col-4 border-bottom"
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter Address"
                      required="true"
                    />
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <th>DOB</th>
                  <td>
                    <input
                      type="date"
                      // className="form-control col-4 border-bottom"
                      id="dob"
                      value={dob}
                      // onChange={formatDate}
                      onChange={(e) => setDob(e.target.value)}
                      placeholder="Enter Date Of Birth"
                      Required
                    />
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <td
                    className="gender"
                    Required="required"
                    id="gender"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <select>
                      <option>--SELECT--</option>
                      <option value="MALE">MALE</option>
                      <option value="FEMALE">FEMALE</option>
                      <option value="OTHER">OTHER</option>
                    </select>
                  </td>
                  <td></td>
                </tr>
                {/* </thead> */}
              </table>
              <div className="">
                <button
                  id="submit-btn"
                  disabled={!(validEmail && validPassword && validPhone)}
                  type="submit"
                  className="btn btn-primary"
                >
                  Register
                </button>
              </div>
            </form>
            <span className="text-success">{msg}</span>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default PatientSignUp;
