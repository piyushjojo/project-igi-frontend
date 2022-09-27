import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import patientService from "../services/patientService";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../styles/PatientSignup.css";
import LoginTest from "./LoginTest";

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

  // =============
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  //================= Return ===================
  return (
    <>
      <div className="container-fluid col-6">
        <LoginTest />
      </div>
      4{" "}
    </>
  );
};

export default PatientSignUp;

{
  /* <section className="">
        <div className="container h-100 ">
          <div className="row justify-content-center  align-items-center h-100">
            <div className="">
              {/* <div
                className="card shadow-2-strong card-registration bg-danger"
                style={{ "border-radius": "15px" }}
              > */
}
//         <div className="card-body p-2 ">
//           <h3 className="pb-2 ">Registration Form</h3>
//           <form>
//             <div className="row">
//               <div className="col-md-6 mb-4">
//                 <div className="form-outline">
//                   <input
//                     type="text"
//                     id="firstName"
//                     className="form-control form-control-lg"
//                   />
//                   <label className="form-label" for="firstName">
//                     First Name
//                   </label>
//                 </div>
//               </div>
//               <div className="col-md-6 mb-4">
//                 <div className="form-outline">
//                   <input
//                     type="text"
//                     id="lastName"
//                     className="form-control-custom form-control-lg"
//                   />
//                   <label className="form-label" for="lastName">
//                     Last Name
//                   </label>
//                 </div>
//               </div>
//             </div>

//             <div className="row">
//               <div className="col-md-6 mb-4 d-flex align-items-center">
//                 <div className="form-outline datepicker w-100">
//                   <input
//                     type="text"
//                     className="form-control-custom form-control-lg"
//                     id="birthdayDate"
//                   />
//                   <label for="birthdayDate" className="form-label">
//                     Birthday
//                   </label>
//                 </div>
//               </div>
//               <div className="col-md-6 mb-4">
//                 <h6 className="mb-2 pb-1">Gender: </h6>

//                 <div className="form-check form-check-inline">
//                   <input
//                     className="form-check-input"
//                     type="radio"
//                     name="inlineRadioOptions"
//                     id="femaleGender"
//                     value="option1"
//                     checked
//                   />
//                   <label className="form-check-label" for="femaleGender">
//                     Female
//                   </label>
//                 </div>

//                 <div className="form-check form-check-inline">
//                   <input
//                     className="form-check-input"
//                     type="radio"
//                     name="inlineRadioOptions"
//                     id="maleGender"
//                     value="option2"
//                   />
//                   <label className="form-check-label" for="maleGender">
//                     Male
//                   </label>
//                 </div>

//                 <div className="form-check form-check-inline">
//                   <label className="form-check-label" for="otherGender">
//                     Other
//                   </label>
//                   <input
//                     className="form-check-input"
//                     type="radio"
//                     name="inlineRadioOptions"
//                     id="otherGender"
//                     value="option3"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="row">
//               <div className="col-md-6 mb-4 pb-2">
//                 <div className="form-outline">
//                   <input
//                     type="email"
//                     id="emailAddress"
//                     className="form-control-custom form-control-lg"
//                   />
//                   <label className="form-label" for="emailAddress">
//                     Email
//                   </label>
//                 </div>
//               </div>
//               <div className="col-md-6 mb-4 pb-2">
//                 <div className="form-outline">
//                   <input
//                     type="tel"
//                     id="phoneNumber"
//                     className="form-control form-control-lg"
//                   />
//                   <label className="form-label" for="phoneNumber">
//                     Phone Number
//                   </label>
//                 </div>
//               </div>
//             </div>

//             <div className="row">
//               <div className="col-12">
//                 <select className="select form-control-lg">
//                   <option value="1" disabled>
//                     Choose option
//                   </option>
//                   <option value="2">Subject 1</option>
//                   <option value="3">Subject 2</option>
//                   <option value="4">Subject 3</option>
//                 </select>
//                 <label className="form-label select-label">
//                   Choose option
//                 </label>
//               </div>
//             </div>

//             <div className="mt-4 pt-2">
//               <input
//                 className="btn btn-primary btn-lg"
//                 type="submit"
//                 value="Submit"
//               />
//             </div>
//           </form>
//         </div>
//         {/* </div> */}
//       </div>
//     </div>
//   </div>
// </section> */}
