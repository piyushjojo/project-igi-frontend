import React, { useState, useEffect } from "react";
import TextInput from "../Components/TextInput";
import { Link, useParams } from "react-router-dom";
import medinchargeService from "../services/medinchargeService";
import "../styles/TextInput.css";
import { toast } from "react-toastify";
import bg from "../assets/img.png";
function AddMeds({ type = "text", label }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setquantity] = useState();
  const [manufacturer, setmanufacturer] = useState("");

  const [validquantity, setValidquantity] = useState(false);
  const [validPrice, setValidPrice] = useState(false);

  const [msg, setMsg] = useState("");

  const addMedicine = (e) => {
    const medicine = {
      name,
      price,
      quantity,
      manufacturer,
    };

    medinchargeService
      .addMed(medicine)
      .then((response) => {
        console.log("medicine added successfully", response.data);

        toast.success("Medicine added Succesfully.");
        setMsg("Medicine added Successfully...");
      })
      .catch((error) => {
        console.log("something went wroing", error);
      });
    // }
  };

  return (
    <div className="container">
      <form className="a" style={{ width: "50%" }} onSubmit={addMedicine}>
        <div className="row">
          <div className="col">
            <div className="input-container">
              <h3 className="text-center">Add Medicine</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="input-container">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label className={name && "filled"} htmlFor="Name">
                Name
              </label>
              <span id="name_span" className="">
                {" "}
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="input-container">
              <input
                type="number"
                min="0"
                value={price}
                onChange={(e) => {
                  if (e.target.value > 0) {
                    setPrice(e.target.value);
                  } else {
                    toast.error("Invalid price");
                  }
                }}
                required
              />
              <label className={price && "filled"} htmlFor="Price">
                Price
              </label>
              <span id="price_span" className="small"></span>
            </div>
          </div>
          <div className="col">
            <div className="input-container">
              <input
                type="number"
                min="0"
                value={quantity}
                onChange={(e) => {
                  if (e.target.value > 0) {
                    setquantity(e.target.value);
                  } else {
                    toast.error("Invalid Quantity");
                  }
                }}
                required
              />
              <label className={quantity && "filled"} htmlFor="quantity">
                Quantity
              </label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="input-container">
              <input
                type="text"
                value={manufacturer}
                onChange={(e) => setmanufacturer(e.target.value)}
                required
              />
              <label className={manufacturer && "filled"}>Manufacturer</label>
              <span id="manufacturer_span"></span>
            </div>
          </div>
        </div>

        <div class="col-12 center">
          <button
            disabled={name && price && quantity && manufacturer ? false : true}
            class="btn btn-dark"
            type="submit"
            onClick={addMedicine}
          >
            Add Medicine
          </button>
          <br></br>
          <span className="text-success">{msg}</span>
        </div>
      </form>
    </div>
  );
}

export default AddMeds;
