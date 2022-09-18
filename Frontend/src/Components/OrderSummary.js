import OrderSummaryTableRow from "../Components/OrderSummaryTableRow";

function OrderSummary(){
    var order_summary=JSON.parse(localStorage.getItem("order_summary"));
    return(
        <div>
             <table className="table table-hover table-striped border">
			<thead>
				<tr>
                    <th>Order Id</th>
					<th>Patient Name</th>
                    <th>Order Status</th>
					<th>Payment Status</th>
					<th>Order Date</th>
                    <th>Total Amount</th>
				</tr>
			</thead>
			<tbody>
					 <OrderSummaryTableRow order_summary={order_summary.order} />
			</tbody>
            </table>
        </div>
    )
}
export default OrderSummary;