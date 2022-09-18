import { Route, Routes, Link, BrowserRouter, Switch } from "react-router-dom";
import PatientLogin from "./PatientLogin";
import Home from "./Home";

import Sidebar from "../Components/Sidebar.js";

function Dashboard(props) {
  if (localStorage.getItem("id") == null) {
    window.location.href = "/signin";
  }
  return (
    <div>
      <Sidebar />
      <h1>
        Welcome <b>{localStorage.getItem("name")}</b>
      </h1>
    </div>
  );
}

export default Dashboard;
