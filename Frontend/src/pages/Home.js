import React from "react";
import { Link } from "react-router-dom";
// import BannerImage from "../assets/homepage.jpg";
import Carousell from "../Components/Carousell";
import "../styles/Home.css";
import Homepage from "./Homepage";

function Home() {
  return (
    <div>
      <Homepage />
      <Carousell />
    </div>
  );
}

export default Home;
