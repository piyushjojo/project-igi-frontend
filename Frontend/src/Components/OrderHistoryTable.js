import { useState } from "react";
import OrderHistoryTableRow from "./OrderHistoryTableRow";

function OrderHistoryTable(props){

    const [orderhistory,setOrderhistory]=useState([]);
    

    return(
        <div>
        <table className="table table-hover table-striped shadow-lg" >
        <thead className="text-center">
            <tr>
                <th className="fw-bolder" style={{"text-align":"center"}}>Order No</th>
                <th className="fw-bolder" style={{"text-align":"center"}}>Order Date</th>
                <th className="fw-bolder" style={{"text-align":"center"}}>Payment Status</th>
                <th className="fw-bolder" style={{"text-align":"center"}}>Order Status</th>
                <th className="fw-bolder" style={{"text-align":"center"}}>Amount</th>
                <th></th>
            </tr>
        </thead>
        <tbody style={{"text-align":"center"}}>
            {props.orderhistory.sort((a,b)=>{return a.id>b.id?-1:1}).map((item)=>
                 <OrderHistoryTableRow orderhistory={item}/>
            )}
        </tbody>
        </table>
        </div>
    )
}
export default OrderHistoryTable;