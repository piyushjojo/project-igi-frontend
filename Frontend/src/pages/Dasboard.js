import { Route, Routes, Link, BrowserRouter, Switch } from "react-router-dom";
import img1 from "../assets/buyMed1.jpg";
import img2 from "../assets/addwallet.jpg";
import Wallet from "../Components/Wallet";
import { useNavigate } from "react-router-dom";
const handleClick = (e, path) => {
  console.log("clicked div");
  window.location.href = "/" + path;
};

function Dashboard(props) {
  const navigate = useNavigate();
  if (localStorage.getItem("id") == null) {
    // window.location.href = "/signin";
    navigate("/signin");
  }

  return (
    <div className="">
      <div className="container-fluid my-4 ">
        <div className="row text-white">
          <div className="col" onClick={(event) => handleClick(event, "order")}>
            <div className="card text-bg-dark ">
              <img src={img1} className="card-img" alt="..." />
              <div className="card-img-overlay bg-dark opacity-50">
                <h1 className="card-title">Buy Medicine</h1>
                <p className="card-text">
                  Search medicine as per your prescription and order here.
                </p>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div
            className="col"
            onClick={(event) => handleClick(event, "wallet")}
          >
            <div className="card text-bg-dark">
              <img src={img2} className="card-img" alt="..." />
              <div className="card-img-overlay bg-dark opacity-75">
                <h1 className="card-title ">Recharge Wallet</h1>
                <p className="card-text ">
                  Recharge your wallet to have smooth transaction while
                  shopping.
                </p>
                <p className="card-text">
                  Current Wallet Balance{" "}
                  <span className="fw-bolder text-success    ">
                    <Wallet />
                  </span>
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
