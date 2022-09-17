

// import AddToCart from "./AddToCart";
function OrdersTableRow(props){
	
	return(
		
			<tr>	
				<td>{props.order_summary.id}</td>
				<td>{props.order_summary.patient.name}</td>
				<td>{props.order_summary.order_status}</td>
				<td>{props.order_summary.payment_status}</td>
				<td>{props.order_summary.order_date}</td>
				<td>{props.order_summary.amount}</td>
			</tr>
			    
		
			
	)
}

export default OrdersTableRow;