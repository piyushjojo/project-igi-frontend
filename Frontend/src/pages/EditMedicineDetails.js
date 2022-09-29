import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import medinchargeService from "../services/medinchargeService";
import "../styles/TextInput.css";
import { toast } from "react-toastify";

function EditMedicineDetails(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setquantity] = useState();
  const [manufacturer, setmanufacturer] = useState("");

  const [msg, setMsg] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { item } = location.state;
    console.log(item);
    setName(item.name);
    setPrice(item.price);
    setquantity(item.quantity);
    setmanufacturer(item.manufacturer);
  }, []);

  const EditMedicineDetails = (e) => {
    if (localStorage.getItem("id") == null) {
      window.location.href = "/signin";
    }
    e.preventDefault();
    const medicine = {
      name,
      price,
      quantity,
      manufacturer,
    };
    console.log(medicine);
    medinchargeService
      .addMed(medicine)
      .then((response) => {
        navigate("/medicines");
      })
      .catch((error) => {
        console.log("something went wroing", error);
      });
    // }
  };

  return (
    <div className="container">
      <form
        className="a"
        style={{ width: "50%" }}
        onSubmit={EditMedicineDetails}
      >
        <div className="row">
          <div className="col">
            <div className="input-container">
              <h3 className="text-center">Update Medicine</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="input-container">
              <input type="text" value={name} disabled />
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
              <input type="text" value={manufacturer} disabled />
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
          >
            Update
          </button>
          <br></br>
          <span className="text-success">{msg}</span>
        </div>
      </form>
    </div>
  );
}

export default EditMedicineDetails;
