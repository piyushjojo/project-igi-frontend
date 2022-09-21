import { useEffect, useState } from "react";
import patientService from "../services/patientService";
import { Link } from "react-router-dom";
import Navbar2 from "../Components/Navbar copy";

function Profile() {
  if (localStorage.getItem("id") == null) {
    window.location.href = "/signin";
  }
  const [patient, setPatient] = useState("");
  var id = parseInt(localStorage.getItem("id"));
  useEffect(() => {
    patientService
      .profile(id)
      .then((response) => {
        setPatient(response.data);
        console.log(response);
        console.log(patient);
        return response.data;
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  }, []);

  return (
    <div>
      <Navbar2/>
      {/* <h1>Welcome {patient.name}</h1> */}
      <div className="container-fluid col-6 my-5">
        <h1>Profile</h1>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark" key={patient}>
            <tr>
              <th>Id</th>
              <td>{localStorage.getItem("id")}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{patient.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{patient.email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{patient.phone}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{patient.address}</td>
            </tr>
            <tr>
              <th>DOB</th>
              <td>{patient.dob}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{patient.gender}</td>
            </tr>
          </thead>
        </table>
        <div className="text-center m-3">
        <Link to="/changePassword">
        <button className="bg-dark text-white"> Change Password</button>{" "}
      </Link>
      <Link to="/deleteAccount">
        <button className="bg-dark text-white"> Delete Account</button>{" "}
      </Link>
        </div>
      </div>
      
    </div>
  );
}

export default Profile;
