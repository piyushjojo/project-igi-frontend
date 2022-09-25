import React, { useEffect, useState ,useContext} from "react";
import { Link } from "react-router-dom";
// import patientService from "../services/patientService";
// import Logo from "../../public/logo.jpeg"
// import Logo from "../assets/logo.jpeg";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Dropdown from "react-bootstrap/Dropdown";
import AppContext from "../Components/context";
import $ from 'jquery'; 
import "../styles/Navbar2.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import "../styles/Navbar.css";

const handleClick = () => {
  localStorage.clear();
  window.location.href = "/signin";
};

function Navbar2(props) {
  const[cartqty,setCartqty]=useState(0);

  var appctx=useContext(AppContext);

  // if(props.page=="dashboard"){
  //     document.getElementById(props.page).className+="red";
  // }else{
  //   document.getElementsByTagName("a").forEach(element => {
  //     if(element.id!=props.page){
  //       element.className="";
  //     } 
  //   });
    
  // }

  // $(document).ready(function () {
  //   $("a").click(function (e) {
  //     console.log("inside jquery")
  //    $("a").removeClass("active");
  //    $(this).addClass("active");
  //     });
  // });


  useEffect(() => {
    setCartqty(appctx.orderlist.length);
    console.log(appctx.orderlist.length + " navbar");
  }, [appctx.orderlist.length])

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };


  return (
    <div className="navbar">
      {/* <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <span className="text-white">E-Pharma</span>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/menu"> Services </Link>
          <Link to="/contact"> Login </Link>
          <Link to="/register"> Register </Link>
          <Link to="/custLogin">custLogin</Link>
        </div>
      </div> */}



      {/* ============================================================= */}

      <div className="rightSide" style={{ justifyContent: "right" }}>
        
        <Link to="/dashboard" id="dashboard" className="nav-item nav-link active"> Dashboard </Link>

        <Link to="/order" id="order" className="nav-item nav-link"> Buy Medicine </Link>
        
        <Link to="/cart" id="cart" className="nav-item nav-link"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                          </svg><sup className="border rounded-circle bg-danger fw-bolder" style={{padding:"0.2rem"}}>{cartqty}</sup></Link>


        <Link to="/orderhistory" id="orderhistory" className="nav-item nav-link"> Orders </Link>


        <div className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg>
            <span> {localStorage.getItem("name")}</span>
          </a>
          
          <ul
            className="dropdown-menu bg-dark"
            aria-labelledby="navbarDropdown"
          >
            {/* <li><a className="dropdown-item" href="#">Profile</a></li> */}
            {/* <li><a className="dropdown-item" href="#">ABCD</a></li> */}
            {/* <li><hr className="dropdown-divider"/></li> */}

            <Link className="dropdown-item" to="/profile">
              Profile
            </Link>
            <Link onClick={handleClick} className="dropdown-item" to="/signout">
              Sign Out
            </Link>
          </ul>
          
        </div>

        {/* <button onClick={toggleNavbar}>Reorder</button> */}
      </div>
    </div>
  );
}
export default Navbar2;
