import Navbar2 from "../Components/Navbar copy";
import patientService from "../services/patientService";
import { useEffect } from "react";
import { useState } from "react";
import OrderHistoryTable from "../Components/OrderHistoryTable";
import { Link } from "react-router-dom";

function OrderHistory() {
  const [orderhistory, setOrderhistory] = useState([]);
  var id = parseInt(localStorage.getItem("id"));
  useEffect(() => {
    console.log("Inside orderhistory");
    patientService
      .OrderHistory(id)
      .then((response) => {
        console.log(response);
        setOrderhistory(response.data.orderlist);
        localStorage.setItem("orderhistory", response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  }, []);

  return (
    <div>
      <div className="container-fluid col-8" style={{ marginTop: "4%" }}>
        <OrderHistoryTable orderhistory={orderhistory} />
      </div>
    </div>
  );
}
export default OrderHistory;
