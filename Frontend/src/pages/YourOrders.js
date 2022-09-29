import OrderedMedicineList from "../Components/OrderedMedicineList";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/yourorder.css";

function YourOrders(props) {
  if (localStorage.getItem("id") == null) {
    window.location.href = "/signin";
  }
  const [color, setColor] = useState("orange");
  const [ordermsg, setOrdermsg] = useState("Order Process Initiated");
  var order_summary = JSON.parse(localStorage.getItem("order_summary"));

  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            className="card shadow-lg mb-6"
            style={{ width: "25rem", marginTop: "4%" }}
          >
            <div className="card-body">
              <h5 className="card-title">Order Details</h5>
              <hr></hr>
              <h6>Address</h6>
              <p className="card-text" style={{ marginBottom: 0 }}>
                {order_summary.order.patient.name}
              </p>
              <p className="card-text">{order_summary.order.patient.address}</p>
              <h6>Order Date</h6>
              <p className="card-text">{order_summary.order.order_date}</p>
              <hr></hr>
              <h6>Medicines Added</h6>
              <OrderedMedicineList />
              <hr></hr>
              <table className="table">
                <tr>
                  <td style={{ paddingLeft: 0, textAlign: "start" }}>
                    <h5>Total Amount</h5>
                  </td>

                  <td style={{ textAlign: "end" }}>
                    <h4 className="fw-bolder">
                      Rs.{order_summary.order.amount}/-
                    </h4>
                  </td>
                </tr>
              </table>
              <hr></hr>
              <Link to="/payment">
                <button
                  className="btn btn-primary my-4"
                  style={{ width: "100%" }}
                >
                  Proceed To Pay
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default YourOrders;
