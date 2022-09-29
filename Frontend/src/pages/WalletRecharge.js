import { useState } from "react";
import patientService from "../services/patientService";

export default function WalletRecharge() {
  const [amt, setAmt] = useState(0.0);
  const [checkBtn, setCheckBtn] = useState("");

  function handleClick() {
    let id = localStorage.getItem("id");

    console.log(amt);
    patientService
      .recharge({ amt }, id)
      .then(
        (document.getElementById("msg").innerHTML =
          "&check;amount added successfully.")
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
      <div className="container" style={{ textAlign: "center", margin: 20 }}>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6" style={{ textAlign: "center", margin: 20 }}>
            <h3>Add into wallet</h3>
            <div className="input-group mb-3 ">
              <input
                type="number"
                className="form-control"
                placeholder="Amount in INR"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                min={1}
                value={amt}
                onChange={(e) => {
                  setAmt(e.target.value);
                  if (e.target.value < 0) {
                    setAmt(1);
                  }
                }}
              />
              <button
                className="btn btn-primary font-weight-bold"
                id="button-addon2"
                onClick={handleClick}
              >
                Add amount
              </button>
            </div>
            <i>
              <span id="msg" className="text-success"></span>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}
