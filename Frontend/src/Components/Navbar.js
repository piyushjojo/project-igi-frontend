import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Logo from "../../public/logo.jpeg"
import Logo from "../assets/logo.jpeg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AppContext from "../Components/context";
import "../styles/Navbar.css";
import Signin from "../pages/Signin";
import PatientSignUp from "../pages/PatientSignUp";

// for getting the current state of signin status
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";

function Navbar() {
  const [cartqty, setCartqty] = useState(0);

  var appctx = useContext(AppContext);

  //
  const signinStatus = localStorage.getItem("id");
  // const signinStatus = useSelector((state) => state.authSlice.status);

  const dispatch = useDispatch();
  const role = localStorage.getItem("role");
  const navigate = useNavigate();
  //----------------------------------------------------------------

  const [openLinks, setOpenLinks] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  useEffect(() => {
    setCartqty(appctx.orderlist.length);
    console.log(appctx.orderlist.length + " navbar");
  }, [appctx.orderlist.length]);

  const handleClick = () => {
    localStorage.clear();
    dispatch(logout());
    // window.location.href = "/signin";
    // navigate("/signin");
  };
  return (
    <nav
      style={{ backgroundColor: "#121619" }}
      className="navbar navbar-expand-lg navbar-dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          E-Pharma
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>

            {signinStatus && role == "patient" && (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
            )}

            {signinStatus && role == "med" && (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/meddashboard"
                >
                  Dashboard
                </Link>
              </li>
            )}

            {signinStatus && role == "med" && (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/medicineorderlist"
                >
                  Manage Orders
                </Link>
              </li>
            )}

            {signinStatus && role == "med" && (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/addMeds"
                >
                  Add Medicine
                </Link>
              </li>
            )}

            {signinStatus && role == "patient" && (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/order"
                >
                  Buy Medicine
                </Link>
              </li>
            )}
            {signinStatus && role == "patient" && (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/orderhistory"
                >
                  Orders
                </Link>
              </li>
            )}

            {signinStatus && role == "patient" && (
              <li className="nav-item">
                <Link to="/cart" id="cart" className="nav-item nav-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-cart4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg>
                  <sup
                    className="border rounded-circle bg-danger fw-bolder"
                    style={{ padding: "0.2rem" }}
                  >
                    {cartqty}
                  </sup>
                </Link>
              </li>
            )}
          </ul>

          <ul className="navbar-nav navbar-right">
            {!signinStatus && (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  // onClick={handleShow}

                  to="/signup"
                >
                  Register
                </Link>
              </li>
            )}

            <li className="nav-item">
              {/* if user is not signed then render signin link */}
              {!signinStatus && (
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/signin"
                >
                  Signin
                </Link>
              )}

              {/* if user is signed in then render signout button */}
              {signinStatus && (
                <li
                  className="nav-item dropdown  navbar-nav navbar-right"
                  style={{ "margin-right": "2.5rem" }}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="bi bi-person"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                    <span> {localStorage.getItem("name")}</span>
                  </a>

                  <ul
                    className="dropdown-menu bg-dark"
                    aria-labelledby="navbarDropdown"
                  >
                    {/* <li><a className="dropdown-item" href="#">Profile</a></li> */}
                    {/* <li><a className="dropdown-item" href="#">ABCD</a></li> */}
                    {/* <li><hr className="dropdown-divider"/></li> */}

                    {role == "patient" && (
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                    )}

                    {role == "med" && (
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                    )}

                    <Link
                      onClick={handleClick}
                      className="dropdown-item"
                      to="/signin"
                    >
                      Sign Out
                    </Link>
                  </ul>
                </li>
              )}
            </li>
          </ul>

          <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            {/* <Modal.Header>
          <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header> */}
            <Modal.Body>
              <h1>Register</h1>
              <PatientSignUp />
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
    </nav>
  );
}

export default Navbar;

/*
<div className="leftSide" id={openLinks ? "open" : "close"}>
        {/* <img src={Logo} /> */ //}
{
  /* <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/menu"> Services </Link>
          <Link to="/patient/signin"> SignIn </Link>
          <Link to="/register"> Register </Link>
          <Link to="/custLogin">custLogin</Link>
        </div> */
}
//</div>

//*/
