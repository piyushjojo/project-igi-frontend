import { useEffect, useState } from "react";
import patientService from "../services/patientService";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DeleteAccount from "./DeleteAccount.js";
import medinchargeService from "../services/medinchargeService";

function Profile() {
  var role = localStorage.getItem("role");
  var navigate = useNavigate();
  if (localStorage.getItem("id") == null) {
    navigate("/signin");
  }
  const [user, setUser] = useState("");
  var id = parseInt(localStorage.getItem("id"));
  useEffect(() => {
    if (role == "patient") {
      patientService
        .profile(id)
        .then((response) => {
          setUser(response.data);
          console.log(response);
          console.log(user);
          return response.data;
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      medinchargeService
        .profile(id)
        .then((response) => {
          setUser(response.data);
          console.log(response);
          console.log(user);
          return response.data;
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="container-fluid col-6 my-5">
        <h1>Profile</h1>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark" key={user}>
            <tr>
              <th>Id</th>
              <td>{localStorage.getItem("id")}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{user.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{user.phone}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{user.address}</td>
            </tr>
            <tr>
              <th>DOB</th>
              <td>{user.dob}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{user.gender}</td>
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
