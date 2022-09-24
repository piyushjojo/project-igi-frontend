import { error } from "jquery";
import { useState } from "react";
import patientService from "../services/patientService";

export default function WalletRecharge() {
  const [amt, setAmt] = useState("");

  function handleClick() {
    let id = localStorage.getItem("id");
    patientService
      .recharge(amt, id)
      .then(
        (document.getElementById("msg").innerHTML =
          "amount added successfully.")
      )
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  }

  return (
    <div>
      <div>
        <p>Please enter the amount to add into wallet</p>
        <br />
        <input
          id="amount"
          value={amount}
          onChange={(e) => setAmt(e.target.value)}
        />
      </div>
      <div className="">
        <button
          id="submit-btn"
          disabled={!{ checkBtn }}
          type="submit"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
      <br />
      <span id="msg"></span>
      <br />
      <div className="">
        <button
          id="cart-btn"
          disabled={!{ checkBtn }}
          type="submit"
          className="btn btn-primary"
          onClick={(window.location.href = "/cart")}
        >
          Go to Cart
        </button>
      </div>
    </div>
  );
}
