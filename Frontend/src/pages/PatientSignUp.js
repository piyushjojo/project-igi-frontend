import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import patientService from "../services/patientService";
import React from "react";

const PatientSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone_no, setphone_no] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

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
    if (id) {
      //update
      patientService
        .update(patient)
        .then((response) => {
          console.log("patient data updated successfully", response.data);
          window.location.href = "/patient/signin";
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      //create
      patientService
        .signup(patient)
        .then((response) => {
          console.log("patient added successfully", response.data);
          window.location.href = "/patient/signin";
        })
        .catch((error) => {
          console.log("something went wroing", error);
        });
    }
  };

  const validateMail = (e) => {
    e.preventDefault();

    patientService
      .checkMail(email)
      .then((response) => {
        console.log("patient added successfully", response.data);
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

  return (
    <div className="container">
      <h3>Add patient</h3>
      <hr />

      <form>
        <div>
          <div className="form-group">
            <input
              type="text"
              className="form-control col-4"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>
          <div>
            <button
              onClick={(e) => validateMail(e)}
              className="btn btn-primary"
            >
              Validate Email
            </button>
          </div>
        </div>
        <div>
          <div className="form-group">
            <input
              type="text"
              className="form-control col-4"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control col-4"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control col-4"
              id="phone_no"
              value={phone_no}
              onChange={(e) => setphone_no(e.target.value)}
              placeholder="Enter phone_no"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control col-4"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter address"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control col-4"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              placeholder="Enter dob"
            />
          </div>
          <div class="mb-3" onChange={(e) => setGender(e.target.value)}>
            <span class="fw-bolder ">Gender </span>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="MALE"
              />
              <label class="form-check-label" for="gender">
                Male
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="FEMALE"
              />
              <label class="form-check-label " for="gender">
                Female
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="others"
                value="OTHER"
              />
              <label class="form-check-label" for="gender">
                Other
              </label>
            </div>
          </div>
        </div>

        <div>
          <button onClick={(e) => savePatient(e)} className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
      <hr />
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default PatientSignUp;
