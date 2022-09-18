

// import AddToCart from "./AddToCart";
function OrdersTableRow(props){
	
	return(
		
			<tr>	
				<td>{props.sno}</td>
				<td>{props.item.med.name}</td>
				<td>{props.item.med.manufacturer}</td>
				<td>{props.item.med.price}</td>
				<td>{props.item.quantity}</td>
			</tr>
			    
		
			
	)
}

export default OrdersTableRow;