import { useState } from "react";
import AddToCart from "./AddToCart";
function TableRow(props){
	const [quantity,setQuantity]=useState(0);
	console.log(quantity+" tablerow");
	console.log(props.med.id);
	return(
			<tr>
				<td>{props.med.id}</td>
				<td>{props.med.name}</td>
				<td>{props.med.manufacturer}</td>
				<td>{props.med.price}</td>
				<td><input type="number" min="1" id="quantity" name="quantity" value={quantity}
				onChange={(e) => setQuantity(e.target.value)}></input></td>
				<td><AddToCart med={props.med} qty={quantity}/></td>
			</tr>
	)
}

export default TableRow;