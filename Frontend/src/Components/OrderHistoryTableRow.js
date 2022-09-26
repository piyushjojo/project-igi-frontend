import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AppContext from "./context";

function OrderHistoryTableRow(props){

var navigate=useNavigate();

var appctx=useContext(AppContext);

const handleClick=(e)=>{
    var ohtrDto={id:e.target.id,amount:props.orderhistory.amount}
    localStorage.setItem("ohtr",JSON.stringify(ohtrDto));
    appctx.payment_bool=true;
    // order_summary.order.id=e.target.id;
    // console.log(e.target.id+" ohtr handleclick");
    // order_summary.order.amount=props.orderhistory.amount;
    // console.log(props.orderhistory.amount+" abcsdd");

    
    navigate("/payment");

}

    return(
        <tr>
        <td>{props.orderhistory.id}</td>
        {/* <td>{props.orderhistory.patient.name}</td> */}
        <td>{props.orderhistory.order_date}</td>
        <td>{props.orderhistory.payment_status}</td>
        <td>{props.orderhistory.order_status}</td>
        <td>{props.orderhistory.amount}</td>
        <td>{props.orderhistory.payment_status=="UNPAID"?<button className="btn btn-primary" id={props.orderhistory.id} onClick={handleClick}>Pay</button>:""}</td>
    </tr>
    )
}
export default OrderHistoryTableRow;