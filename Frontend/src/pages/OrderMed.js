import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
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
import patientService from "../services/patientService";
import MedicineList from "../Components/MedicineList";
import Navbar2 from "../Components/Navbar copy";
import { Route, Routes, Link, BrowserRouter, Switch } from "react-router-dom";
import { useEffect } from "react";

function OrderMed(props) {
  const [name, setName] = useState("");
  const [medicine, setMedicine] = useState([]);

  useEffect(() => {
    console.log("in use Effect ordermed");
    handleClick("a");
  }, []);

  const handleClick = (v) => {
    if (name != "") {
      v = name;
    }

    patientService.OrderMedicine(v).then(
      (response) => {
        console.log("success");
        console.log(response);
        setMedicine(response.data);
        if (response.data.length == 0) {
          document.getElementById("med").innerHTML =
            "&cross; No medicine Found";
          document.getElementById("med").style.color = "red";
        } else {
          document.getElementById("med").innerHTML = "";
        }
        console.log(medicine);
      },
      (error) => {
        alert("Invalid Login Details", error);
        toast.error("invalid login");
        console.log(error);
        console.log("Error");
      }
    );
  };

  return (
    <div>
      {/* <Navbar2 page="order"/> */}

      <div className="text-center">
        {/* <h3>Order Medicine</h3> */}

        <header className=" bg-dark">
          <div className="container">
            <div className="w-100 d-flex flex-wrap align-items-center justify-content-center">
              <form
                className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                role="search"
              >
                <input
                  type="search"
                  className="form-control form-control-dark text-bg-dark"
                  placeholder="Enter Medicine"
                  aria-label="Search"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </form>

              <div className="text-end">
                <button
                  disabled={name ? false : true}
                  type="button"
                  onClick={handleClick}
                  className="btn  me-2 btn-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>{" "}
                  Search
                </button>
              </div>
            </div>
            <div>
              <span id="med"></span>
            </div>
          </div>
        </header>
        {/* ==================================================== */}
      </div>
      <div>
        <span id="med"></span>
      </div>
      <div className="container-fluid col-6">
        <MedicineList medList={medicine} />
      </div>
      <div className="text-center mb-6">
        <Link to="/cart">
          <button className="btn btn-primary">
            Go to Cart{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OrderMed;
