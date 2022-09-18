import { useEffect,useContext,useState } from "react";
import AppContext from "../Components/context";
import { Link,useNavigate } from "react-router-dom";
import patientService from "../services/patientService";
import MedicinesInTheCart from "../Components/MedicinesInTheCart.js";


function Cart(){


var medqty=localStorage.getItem("med_qty");
var appctx=useContext(AppContext);
const [orderlist,setOrderlist]=useState([]);
    var navigate=useNavigate();
    useEffect(()=>{
        setOrderlist(appctx.orderlist);
        console.log(appctx.orderlist);
        console.log(medqty);
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
            console.log(JSON.parse(localStorage.getItem("order_summary")))
            // appctx.orderlist.
            
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
		<div>
            <div>
                <Link to="/order"> Order </Link>
            </div>
            <MedicinesInTheCart order_list={orderlist}/>
            <button className="btn btn-primary" onClick={checkOut}>Check Out</button>
        </div>
	)
}
export default Cart;