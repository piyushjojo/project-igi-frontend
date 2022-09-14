import { Route, Routes, Link, BrowserRouter, Switch } from "react-router-dom";
import PatientLogin from "./PatientLogin";
import Home from "./Home";

import Sidebar from "../Components/Sidebar.js";

function Dashboard(props) {
  if (localStorage.getItem("id") == null) {
    window.location.href = "/patient/signin";
  }
  return (
    <div>
      <Sidebar />
      <h1>Welcome Page {localStorage.getItem("name")}</h1>
    </div>
  );
}

export default Dashboard;
