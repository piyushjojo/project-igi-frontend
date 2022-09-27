import { Route, Routes, Link, BrowserRouter, Switch } from "react-router-dom";
import img1 from "../assets/med4.jpg";
import img2 from "../assets/wallet.jpg";

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
      {/* <Sidebar /> */}
      {/* <Navbar2 page="dashboard" /> */}
      <div className="container-fluid my-4 ">
        <div className="row text-white">
          <div
            className="col"
            // onClick={handleClick}
            onClick={(event) => handleClick(event, "addMeds")}
            // style={{ cursor: "pointer" }}
          >
            <div className="card text-bg-dark ">
              <img src={img1} className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h1 className="card-title text-black">Add Medicine</h1>
                <p className="card-text text-black">Add Medicine here.</p>
                <p className="card-text">
                  {/* <small>Last updated 3 mins ago</small> */}
                </p>
              </div>
            </div>
          </div>
          <div
            className="col"
            onClick={(event) => handleClick(event, "wallet")}
          >
            <div className="card text-bg-dark">
              <img src={img2} className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h1 className="card-title ">Recharge Wallet</h1>
                <p className="card-text ">
                  Recharge your wallet to have smooth transaction while
                  shopping.
                </p>
                <p className="card-text">
                  Current Wallet Balance <Wallet />
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
