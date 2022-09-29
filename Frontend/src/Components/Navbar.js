import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import AppContext from "../Components/context";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
function Navbar() {
  const [cartqty, setCartqty] = useState(0);

  var appctx = useContext(AppContext);

  const signinStatus = localStorage.getItem("id");

  const role = localStorage.getItem("role");
  const navigate = useNavigate();

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
  };
  return (
    <nav
      style={{ backgroundColor: "#121619" }}
      className="navbar navbar-expand-lg navbar-dark"
    >
      <div className="container-fluid ">
        <img width={180} src={logo} alt="logo" />

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
              <NavLink
                className="nav-link "
                activeClassName="active"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link "
                activeClassName="active"
                aria-current="page"
                to="/about"
              >
                About
              </NavLink>
            </li>

            {signinStatus && role == "patient" && (
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  activeClassName="active"
                  aria-current="page"
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
            )}

            {signinStatus && role == "med" && (
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  activeClassName="active"
                  aria-current="page"
                  to="/meddashboard"
                >
                  Dashboard
                </NavLink>
              </li>
            )}

            {signinStatus && role == "med" && (
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  activeClassName="active"
                  aria-current="page"
                  to="/medicineorderlist"
                >
                  Manage Orders
                </NavLink>
              </li>
            )}

            {signinStatus && role == "med" && (
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  activeClassName="active"
                  aria-current="page"
                  to="/addMeds"
                >
                  Add Medicine
                </NavLink>
              </li>
            )}

            {signinStatus && role == "patient" && (
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  activeClassName="active"
                  aria-current="page"
                  to="/order"
                >
                  Buy Medicine
                </NavLink>
              </li>
            )}
            {signinStatus && role == "patient" && (
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  activeClassName="active"
                  aria-current="page"
                  to="/orderhistory"
                >
                  Orders
                </NavLink>
              </li>
            )}

            {signinStatus && role == "patient" && (
              <li className="nav-item">
                <NavLink to="/cart" id="cart" className="nav-item nav-link">
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
                </NavLink>
              </li>
            )}
          </ul>

          <ul className="navbar-nav navbar-right">
            {!signinStatus && (
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  activeClassName="active"
                  aria-current="page"
                  to="/signup"
                >
                  Register
                </NavLink>
              </li>
            )}

            <li className="nav-item">
              {!signinStatus && (
                <NavLink
                  className="nav-link "
                  activeClassName="active"
                  aria-current="page"
                  to="/signin"
                >
                  Signin
                </NavLink>
              )}

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
                    {role == "patient" && (
                      <NavLink className="dropdown-item" to="/profile">
                        Profile
                      </NavLink>
                    )}

                    <NavLink
                      onClick={handleClick}
                      className="dropdown-item"
                      to="/signin"
                    >
                      Sign Out
                    </NavLink>
                  </ul>
                </li>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
