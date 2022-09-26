import { useEffect,useContext,useState } from "react";
import AppContext from "../Components/context";
import { Link,useNavigate } from "react-router-dom";
import patientService from "../services/patientService";
import MedicinesInTheCart from "../Components/MedicinesInTheCart.js";
import Navbar2 from "../Components/Navbar copy";


function Cart(){

var appctx=useContext(AppContext);
const [orderlist,setOrderlist]=useState([]);
    var navigate=useNavigate();

    useEffect(()=>{
        setOrderlist(appctx.orderlist);
        console.log(appctx.orderlist);
        
    },[])

    const checkOut = () => {
    
    
        const data=appctx.orderlist;

        var id = parseInt(localStorage.getItem("id"));
        console.log(id+" "+typeof(id));

    
        patientService.medicineAddCart(id,data).then(
          (response) => {
            
            console.log("success");
            console.log(response);
            console.log(response.data)
            localStorage.setItem("order_summary",JSON.stringify(response.data));
            console.log(JSON.parse(localStorage.getItem("order_summary")));
            appctx.setOrderlist([]);
            
            navigate("/yourorders");
            // window.location.href= "/yourorders";
          },
          (error) => {
           
            console.log(error);
            console.log("Error");
          }
        );
      };
    
	
    return(
		<div className="">
      <Navbar2></Navbar2>
      <div className="container-fluid">
        <div className="row justify-content-center" style={{"margin-top":"5%"}}>
            <div className="col-7">
                <MedicinesInTheCart order_list={orderlist} setOrderlist={setOrderlist}/>
            </div>
            <div className="text-center" style={{marginTop:"20px"}}>
                <button className="btn btn-primary" onClick={checkOut}>Check Out</button>
            </div>
           
        </div>
           
      </div>
          
    </div>
	)
}
export default Cart;