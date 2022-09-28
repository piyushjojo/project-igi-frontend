import { Route, Routes, Link, BrowserRouter, Switch } from "react-router-dom";
import img1 from "../assets/addMedicine2.jpg";
import img2 from "../assets/manageOrders.jpg";

import Navbar2 from "../Components/Navbar copy";
import Wallet from "../Components/Wallet";

const handleClick = (e, path) => {
  console.log("clicked div");
  window.location.href = "/" + path;
};

function Dashboard(props) {
  if (localStorage.getItem("id") == null) {
    window.location.href = "/signin";
  }

  return (
    <div className="">
      <div className="container-fluid my-4 ">
        <div className="row text-white">
          <div
            className="col"
            onClick={(event) => handleClick(event, "addMeds")}
          >
            <div className="card ">
              <img src={img1} className="card-img" alt="..." />
              <div className="card-img-overlay bg-dark opacity-75">
                <h1 className="card-title ">Add Medicine</h1>
                <p className="card-text ">Click to add or update Medicine.</p>
                <p className="card-text">
                  {/* <small>Last updated 3 mins ago</small> */}
                </p>
              </div>
            </div>
          </div>
          <div
            className="col"
            onClick={(event) => handleClick(event, "medicineorderlist")}
          >
            <div className="card text-bg-dark">
              <img src={img2} className="card-img" alt="..." />
              <div className="card-img-overlay  bg-dark opacity-75">
                <h1 className="card-title ">Manage Orders</h1>
                <p className="card-text ">
                  Manage orders to keep your customers satisfied...
                </p>
                <p className="card-text">
                  {/* <small>Last updated 3 mins ago</small> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
