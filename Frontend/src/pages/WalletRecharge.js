import { data, error } from "jquery";
import { useState } from "react";
import patientService from "../services/patientService";
import { Link } from "react-router-dom";
import Navbar2 from "../Components/Navbar copy";

export default function WalletRecharge() {
  const [amt, setAmt] = useState("");
  const [checkBtn, setCheckBtn] = useState("");

  function handleClick() {
    let id = localStorage.getItem("id");
    var amount = { amt };
    console.log(amt);
    patientService
      .recharge(amount, id)
      .then(
        (document.getElementById("msg").innerHTML =
          "amount added successfully.")
      )
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  }

  const gotoCart = (e, path) => {
    console.log("clicked div");
    window.location.href = "/" + path;
  };

  return (
    <div>
      <Navbar2 />
      <div className="container" style={{ textAlign: "center", margin: 20 }}>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6" style={{ textAlign: "center", margin: 20 }}>
            <p>Please enter the amount to add into wallet</p>
            <div className="input-group mb-3 ">
              <input
                type="text"
                className="form-control"
                placeholder="Amount in INR"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-dark btn-primary font-weight-bold"
                type="button"
                id="button-addon2"
                onClick={handleClick}
              >
                Add amount
              </button>
              {/* <button
                className="btn btn-outline-dark btn-primary font-weight-bold"
                type="button"
                id="button-addon2"
                onClick={(e) => gotoCart(e, "cart")}
              >
                Go To Cart
              </button> */}
            </div>
            <span id="msg"></span>
          </div>
          <div className="col-3"></div>
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
    </div>
  );
}
