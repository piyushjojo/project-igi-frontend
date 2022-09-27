import { useEffect, useState } from "react";
import patientService from "../services/patientService";
import { Link, useNavigate } from "react-router-dom";
import Navbar2 from "../Components/Navbar copy";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DeleteAccount from "./DeleteAccount.js";

function Profile() {
  var navigate = useNavigate();
  if (localStorage.getItem("id") == null) {
    window.location.href = "/signin";
    // navigate("/signin");
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
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
            <Button className="mx-2" variant="dark">
              Change Password
            </Button>
          </Link>

          <Button className="mx-2" variant="danger" onClick={handleShow}>
            Delete Account
          </Button>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title> Delete Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DeleteAccount />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Profile;
