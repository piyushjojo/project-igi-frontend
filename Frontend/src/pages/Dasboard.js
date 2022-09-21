import { Route, Routes, Link, BrowserRouter, Switch } from "react-router-dom";
import PatientLogin from "./PatientLogin";
import Home from "./Home";

import Sidebar from "../Components/Sidebar.js";
import Navbar2 from "../Components/Navbar copy";

function Dashboard(props) {
  if (localStorage.getItem("id") == null) {
    window.location.href = "/signin";
  }
  return (
    <div>
      {/* <Sidebar /> */}
      <Navbar2></Navbar2>
      <h1>
        Welcome <b>{localStorage.getItem("name")}</b>
      </h1>
    </div>
  );
}

export default Dashboard;
