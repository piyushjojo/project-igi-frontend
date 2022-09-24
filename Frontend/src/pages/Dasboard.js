import { Route, Routes, Link, BrowserRouter, Switch } from "react-router-dom";
import img1 from "../assets/card1.jpg";
import img2 from "../assets/card2.jpg";

import Navbar2 from "../Components/Navbar copy";

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
      <Navbar2></Navbar2>
      <div className="container-fluid my-4 ">
        <div className="row text-white">
          <div
            className="col"
            // onClick={handleClick}
            onClick={(event) => handleClick(event, "order")}
            // style={{ cursor: "pointer" }}
          >
            <div className="card text-bg-dark ">
              <img src={img1} className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text ">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  {/* <small>Last updated 3 mins ago</small> */}
                </p>
              </div>
            </div>
          </div>
          <div className="col" onClick={(event) => handleClick(event, "cart")}>
            <div className="card text-bg-dark">
              <img src={img2} className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text ">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
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
