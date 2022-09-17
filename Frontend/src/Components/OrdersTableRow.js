

// import AddToCart from "./AddToCart";
function OrdersTableRow(props){
	
	return(
		
			<tr>	
				<td>{props.sno}</td>
				<td>{props.order_summary.medicine.name}</td>
				<td>{props.order_summary.quantity}</td>
				<td>{props.order_summary.medicine.price}</td>
				<td>{props.order_summary.amount}</td>
			</tr>
			    
		
			
	)
}

export default OrdersTableRow;