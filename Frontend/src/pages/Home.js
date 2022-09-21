import React from "react";
import { Link } from "react-router-dom";
// import BannerImage from "../assets/homepage.jpg";
import Navbar from "../Components/Navbar";
import Carousell  from "../Components/Carousell";
import "../styles/Home.css";
import Homepage from "./Homepage";
import Footer from "../Components/Footer"


function Home() {
  return (
    <div>
       <Navbar/>
       <Homepage/>
        <Carousell/>
      
      {/* <div
        className="home" style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <div>
          <h1>Healthcare System</h1>
          <br></br>
          <p>Improving Lives Together.</p>

          <Link to="/signin">
            <button className="bg-primary"> SignIn</button>{" "}
          </Link>
          <Link to="/signup">
            <button className="bg-primary"> Register</button>{" "}
          </Link>
        </div>
      </div> */}
      <Footer/>
    </div>
  );
}

export default Home;
