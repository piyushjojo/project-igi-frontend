import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import patientService from "../services/patientService";
import "../styles/TextInput.css";
import { toast } from "react-toastify";

function Register({ type = "text", label }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [password, setPassword] = useState("");
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
    patientService
      .signup(patient)
      .then((response) => {
        console.log("patient added successfully", response.data);
        toast.success("Patient Registered Succesfully.");
        setMsg("Patient Registered Successfully...");
        setTimeout(function () {
          window.location.href = "/signin";
        }, 5000);
      })
      .catch((error) => {
        console.log("something went wroing", error);
      });
  };

  useEffect(() => {
    if (id) {
      patientService
        .get(id)
        .then((patient) => {
          setName(patient.data.name);
          setEmail(patient.data.email);
          setPassword(patient.data.password);
          setPhone_no(patient.data.phone_no);
          setAddress(patient.data.address);
          setDob(patient.data.dob);
          setGender(patient.data.gender);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

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
          setValidEmail(true);
          return true;
        })
        .catch((error) => {
          console.log("something went wroing", error);
          document.getElementById("email_span").innerHTML =
            "&cross; email already in use";
          document.getElementById("email_span").style.color = "red";
          setValidEmail(false);

          return false;
        });
    } else {
      console.log(
        "You have entered an invalid email address! " + e.target.value
      );
    }
  };

  const validatePhoneNo = (val) => {
    if (/[1-9]{1}[0-9]{9}$/.test(val)) {
      document.getElementById("phone_span").innerHTML = "&check; ";
      document.getElementById("phone_span").style.color = "green";
      setValidPhone(true);
    } else {
      document.getElementById("phone_span").innerHTML =
        "&cross; Enter valid Mobile No";
      document.getElementById("phone_span").style.color = "red";
      setValidPhone(false);
    }
  };

  const validatePassword = (e) => {
    if (
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,15}$/.test(
        e.target.value
      )
    ) {
      console.log("valid password");
      setPassword(e.target.value);
      document.getElementById("pass_span").innerHTML = "&check;";
      document.getElementById("pass_span").style.color = "green";
      setValidPassword(true);
    } else {
      console.log("Invalid Passowrd");
      document.getElementById("pass_span").innerHTML =
        "&cross; 1 Capital 1 small ,1 Special ,1 Number, 8-15 chars";
      document.getElementById("pass_span").style.color = "red";

      setValidPassword(false);
    }
  };

  return (
    <div className="container-fluid col-6">
      <form className="a" onSubmit={savePatient}>
        <div className="row">
          <div className="col">
            <div className="input-container">
              <input
                type="email"
                value={email}
                onBlurCapture={ValidateEmailFormat}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className={email && "filled"} htmlFor="Email">
                Email
              </label>
              <span id="email_span" className="">
                {" "}
              </span>
            </div>
          </div>
          <div className="col">
            <div className="input-container">
              <input
                type="password"
                value={password}
                minlength="8"
                pattern="[A-Za-z0-9@]+"
                title="Only Alphabets and Numbers"
                onBlur={validatePassword}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className={password && "filled"} htmlFor="password">
                Password
              </label>
              <span id="pass_span" className="small"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="input-container">
              <input
                type="text"
                value={name}
                minLength={3}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label className={name && "filled"} htmlFor="Name">
                Name
              </label>
            </div>
          </div>
          <div className="col">
            <div className="input-container">
              <input
                type="number"
                value={phone_no}
                minLength={10}
                onBlur={(e) => validatePhoneNo(e.target.value)}
                onChange={(e) => setPhone_no(e.target.value)}
                required
              />
              <label className={phone_no && "filled"}>Phone No</label>
              <span id="phone_span"></span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="input-container">
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
              <label className={dob && "filled"} htmlFor="dob">
                Date Of Birth
              </label>
            </div>
          </div>
          <div className="col">
            <div className="input-container">
              <select onChange={(e) => setGender(e.target.value)}>
                <option value=""></option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHERS">Others</option>
              </select>
              <label className={gender && "filled"}>Gender</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="input-container">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <label className={address && "filled"} htmlFor="address">
              Address
            </label>
          </div>
        </div>
        <div class="col-12 center">
          <button
            disabled={!(validEmail && validPassword && validPhone)}
            class="btn btn-dark"
            type="submit"
          >
            Register
          </button>
          <br></br>
          <span className="text-success">{msg}</span>
        </div>
      </form>
    </div>
  );
}

export default Register;
