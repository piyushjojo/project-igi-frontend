import OrderedMedicineList from "../Components/OrderedMedicineList";
import { Link } from "react-router-dom";
import OrderSummary from "../Components/OrderSummary";
import { useState } from "react";
import { useEffect } from "react";
import Navbar2 from "../Components/Navbar copy";
import  "../styles/yourorder.css";
import Footer from "../Components/Footer";

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
            <Navbar2 />
            {/* <div className="row justify-content-around mt-4 ">
            <h3 style={{color}} className="text-center">{ordermsg}</h3>
            <div className="col-4">
                <h3>Ordered Medicine List</h3>
                <OrderedMedicineList/>
            </div>
            <div className="col-6">
                <h3>Order Summary</h3>
                <OrderSummary/>
            </div>
            </div>
            <div id="paymentLink" className="text-center">
                <Link to="/payment"><h3>Proceed To Pay</h3></Link>
            </div>   */}
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="card shadow-lg mb-6" style={{ width: "25rem","marginTop":"4%" }}>
                        <div className="card-body">
                            <h5 className="card-title">Order Details</h5>
                            <hr></hr>
                            <h6>Address</h6>
                            <p className="card-text" style={{"marginBottom":0}}>{order_summary.order.patient.name}</p>
                            <p className="card-text">{order_summary.order.patient.address}</p>
                            <h6>Order Date</h6>
                            <p className="card-text">{order_summary.order.order_date}</p>
                            <hr></hr>
                            <h6>Medicines Added</h6>
                            <OrderedMedicineList/>
                            <hr></hr>
                            <table className="table">
                                <tr>
   
                                    <td style={{"paddingLeft":0 ,"textAlign":"start"}}><h5>Total Amount</h5></td>
                                    
                                    <td style={{"textAlign":"end"}}><h4 className="fw-bolder">Rs.{order_summary.order.amount}/-</h4></td>
                                </tr>
                            </table>
                            <hr></hr>
                            <Link to="/payment">
                            <button className="btn btn-primary my-4" style={{"width":"100%"}}>Proceed To Pay</button></Link>

                        </div>
                       
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    )
}
export default YourOrders;