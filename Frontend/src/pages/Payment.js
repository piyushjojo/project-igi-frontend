import patientService from "../services/patientService";
import { useNavigate } from "react-router-dom";
import Navbar2 from "../Components/Navbar copy";
import { useState } from "react";
import  "../styles/Payment.css";

function Payment(){
    const [color,setColor]=useState("black");
    var order_summary=JSON.parse(localStorage.getItem("order_summary"));
    var navigate=useNavigate();

    const handlClick=()=>{
        var orderId=order_summary.order.id;
        var orderAmount=order_summary.order.amount;
        var paymentDto={orderId,orderAmount};
        var id=order_summary.order.patient.id;
        if(order_summary.order.patient.wallet>orderAmount){
            patientService.payment(paymentDto,id).then(
                navigate("/processing")
            ).then(
                (response) => {
                  
                  console.log("success");
                  console.log(response);
                  localStorage.setItem("order_summary",JSON.stringify(response.data));
                  console.log(JSON.parse(localStorage.getItem("order_summary")));
                  
                },
                (error) => {
                  console.log(error);
                  console.log("Error");
                }
              );
        }else{
            console.log("inside else")
            setColor("red");
            document.getElementById("wallet").className+="shake";
            setTimeout(()=>{
                document.getElementById("wallet").className="a ";
            },1000)
            
        }
        
    }

    return(
        <div>
            <Navbar2/>
            <div className="row m-4" style={{ textAlign: "right" }}>
                <h3 id="wallet" className="a " style={{color}}>Wallet <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
                    <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                </svg> {order_summary.order.patient.wallet}</h3>

            </div>
            
            <div className="row justify-content-center">

            {/* <table className="col-4 table-bordered border py-4">
                <tr>
                    <td><label>Order Reference ID</label></td>
                    <td>{order_summary.order.id}</td>
                </tr>
                <tr>
                    <td><label>Amount to Pay</label></td>
                    <td>Rs. {order_summary.order.amount}</td>
                </tr>
                <tr>
                    <td colSpan={2}><button className="btn btn-primary" onClick={handlClick}>Pay</button></td>
                </tr>
            </table> */}

                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="card shadow-lg" style={{ width: "25rem", "marginTop": "4%" }}>
                            <div className="card-body">
                                <h5 className="card-title">Payment Details</h5>
                                <hr></hr>
                                <table className="table border-borderless">
                                    <tr>
                                        <td style={{ "paddingLeft": 0, "textAlign": "start" }}><label>Order Reference ID</label></td>
                                        <td style={{ "textAlign": "end" }}>{order_summary.order.id}</td>
                                    </tr>
                                    <tr style={{ borderTop: "0px" }}>
                                        <td style={{ "paddingLeft": 0, "textAlign": "start" }}><label>Amount to Pay</label></td>
                                        <td style={{ "textAlign": "end" }}>Rs. {order_summary.order.amount}</td>
                                    </tr>
                                </table>
                                <button className="btn btn-primary mb-3" style={{ "width": "100%" }} onClick={handlClick}>Pay</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
export default Payment;