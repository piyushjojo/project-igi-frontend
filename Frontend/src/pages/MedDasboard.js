import { Route, Routes, Link, BrowserRouter, Switch } from "react-router-dom";
import img1 from "../assets/addMedicine2.jpg";
import img2 from "../assets/manageOrders.jpg";
import { useNavigate } from "react-router-dom";

function Dashboard(props) {
  const navigate = useNavigate();
  if (localStorage.getItem("id") == null) {
    window.location.href = "/signin";
  }
  const handleClick = (e, path) => {
    console.log("clicked div");
    // window.location.href = "/" + path;
    navigate("/" + path);
  };

  return (
    <div className="">
      <div className="container-fluid my-4 ">
        <div className="row text-white">
          <div
            className="col"
            onClick={(event) => handleClick(event, "medicines")}
          >
            <div className="card ">
              <img src={img1} className="card-img" alt="..." />
              <div className="card-img-overlay bg-dark opacity-75">
                <h1 className="card-title ">Manage Inventory</h1>
                <p className="card-text ">Click to view Inventory.</p>
                <p className="card-text"></p>
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
                  Manage orders to keep your customers satisfied.
                </p>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
