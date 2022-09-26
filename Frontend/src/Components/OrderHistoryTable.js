import OrderHistoryTableRow from "./OrderHistoryTableRow";

function OrderHistoryTable(props){
    return(
        <div>
        <table className="table table-hover table-striped shadow-lg" >
        <thead className="text-center">
            <tr>
                <th className="fw-bolder" style={{"text-align":"center"}}>Order No</th>
                {/* <th className="fw-bolder" style={{"text-align":"center"}}>Name</th> */}
                <th className="fw-bolder" style={{"text-align":"center"}}>Order Date</th>
                <th className="fw-bolder" style={{"text-align":"center"}}>Payment Status</th>
                <th className="fw-bolder" style={{"text-align":"center"}}>Order Status</th>
                <th className="fw-bolder" style={{"text-align":"center"}}>Amount</th>
            </tr>
        </thead>
        <tbody style={{"text-align":"center"}}>
            {props.orderhistory.map((item)=>
                 <OrderHistoryTableRow orderhistory={item}/>
            )}
        </tbody>
        </table>
        </div>
    )
}
export default OrderHistoryTable;