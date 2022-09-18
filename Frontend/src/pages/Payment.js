import patientService from "../services/patientService";
import { useNavigate } from "react-router-dom";

function Payment(){
    var order_summary=JSON.parse(localStorage.getItem("order_summary"));
    var navigate=useNavigate();

    const handlClick=()=>{
        var orderId=order_summary.order.id;
        var orderAmount=order_summary.order.amount;
        var paymentDto={orderId,orderAmount};
        var id=order_summary.order.patient.id;
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
    }

    return(
        <div>
            <div className="row m-4" style={{textAlign:"right"}}>
                <h3>Wallet: {order_summary.order.patient.wallet}</h3>
            </div>
            
            <div className="row justify-content-center align-items-center" style={{height:"50vh"}}>

            <table className="col-4 table-bordered border py-4">
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
            </table>
            </div>
            
            
        </div>
    )
}
export default Payment;