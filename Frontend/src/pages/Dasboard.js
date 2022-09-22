import { Route, Routes, Link, BrowserRouter, Switch } from "react-router-dom";

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
