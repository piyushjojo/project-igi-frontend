import { useEffect, useContext, useState } from "react";
import AppContext from "../Components/context";
import { Link, useNavigate } from "react-router-dom";
import patientService from "../services/patientService";
import MedicinesInTheCart from "../Components/MedicinesInTheCart.js";
import emptyCart from "../assets/emptycart.png";
function Cart() {
  if (localStorage.getItem("id") == null) {
    window.location.href = "/signin";
  }
  var appctx = useContext(AppContext);
  const [orderlist, setOrderlist] = useState([]);
  var navigate = useNavigate();

  useEffect(() => {
    setOrderlist(appctx.orderlist);
    console.log(appctx.orderlist);
  }, []);

  const checkOut = () => {
    const data = appctx.orderlist;

    var id = parseInt(localStorage.getItem("id"));
    console.log(id + " " + typeof id);

    patientService.medicineAddCart(id, data).then(
      (response) => {
        console.log("success");
        console.log(response);
        console.log(response.data);
        localStorage.setItem("order_summary", JSON.stringify(response.data));
        console.log(JSON.parse(localStorage.getItem("order_summary")));
        appctx.setOrderlist([]);

        navigate("/yourorders");
      },
      (error) => {
        console.log(error);
        console.log("Error");
      }
    );
  };

  return (
    <div className="">
      <div className="container-fluid">
        <div
          className="row justify-content-center"
          style={{ "margin-top": "5%" }}
        >
          {orderlist.length == 0 && (
            <div className="container text-center">
              <h1>Looks like you have not added anything</h1>
              <h1>to your cart, please add something :)</h1>
              <img src={emptyCart} alt="empty cart" />;
            </div>
          )}

          {orderlist.length != 0 && (
            <div className="col-8">
              <MedicinesInTheCart
                order_list={orderlist}
                setOrderlist={setOrderlist}
              />
              <div className="text-center" style={{ margin: "50px" }}>
                <button className="btn btn-primary" onClick={checkOut}>
                  Check Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Cart;
