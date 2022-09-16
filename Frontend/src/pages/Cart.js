import { useEffect,useContext,useState } from "react";
import AppContext from "../Components/context";
import { Link } from "react-router-dom";
import patientService from "../services/patientService";


function Cart(){

var medicinelist=Array(localStorage.getItem("med_orderlist"));
var medqty=localStorage.getItem("med_qty");
var appctx=useContext(AppContext);
const [orderlist,setOrderlist]=useState([]);

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
    
            
            // window.location.href = "/dashboard";
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
               {orderlist.map(item=>{
                    return <div><h2>{item.med.name}</h2>
                            <h2>{item.quantity}</h2></div>
               })}
            <button className="btn btn-primary" onClick={checkOut}>Check Out</button>
        </div>
	)
}
export default Cart;