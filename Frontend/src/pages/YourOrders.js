import OrderedMedicineList from "../Components/OrderedMedicineList";
import { Link } from "react-router-dom";
import OrderSummary from "../Components/OrderSummary";
import { useState } from "react";
import { useEffect } from "react";
function YourOrders(props){
    const [color,setColor]=useState("orange");
    const [ordermsg,setOrdermsg]=useState("Order Process Initiated");
    var order_summary=JSON.parse(localStorage.getItem("order_summary"));
    
   
    useEffect(()=>{
        if(order_summary.order.payment_status==="PAID"){
            setColor("green");
            setOrdermsg("Order Placed Successfully");
            document.getElementById("paymentLink").hidden=true;
        }
    },[])

    return(
        <div>
            <h3></h3>
            <div className="row justify-content-around mt-4 ">
            <h3 style={{color}}>{ordermsg}</h3>
            <div className="col-4">
                <h3>Ordered Medicine List</h3>
                <OrderedMedicineList/>
            </div>
            <div className="col-6">
                <h3>Order Summary</h3>
                <OrderSummary/>
            </div>
            </div>
            <div id="paymentLink">
                <Link to="/payment"><h3>Proceed To Pay</h3></Link>
            </div>  
        </div>
    )
}
export default YourOrders;