import { useState ,useContext} from "react";
import patientService from "../services/patientService";
import AppContext from "./context";

// import AddToCart from "./AddToCart";
function TableRow(props){
	const [quantity,setQuantity]=useState(0);
	const [med,setMed]=useState();
	var appctx=useContext(AppContext);


	
	var setter=(e)=>{
		setMed(props.med);
		setQuantity(e.target.value);
	}

	var addToCart = (e)=>{
		
		e.preventDefault();
		
		var medicine={med,quantity};
		// console.log(medicine.id+" "+medicine.quantity);
		appctx.setOrderlist((orderlist)=>{
			console.log();
			var a=orderlist;
			if(orderlist.filter(
				item=>item.med.id==props.med.id
			).length==0){
				a=[...orderlist,medicine]
			}else if(orderlist.filter(
				item=>item.med.id==props.med.id
			)[0].quantity!=quantity){
				orderlist.filter(
					item=>item.med.id==props.med.id
				)[0].quantity=quantity;
			}
			
			
			localStorage.setItem("med_orderlist",a);
			return a;
		});
		
		localStorage.setItem("med_qty",quantity);
		
	}
	return(
		
			<tr>	
				<td>{props.med.id}</td>
				<td>{props.med.name}</td>
				<td>{props.med.manufacturer}</td>
				<td>{props.med.price}</td>
				<td><input type="number" min="1" id="quantity" name="quantity" value={quantity}
				onChange={setter}></input></td>
				{/* <td><AddToCart med={props.med} qty={quantity}/></td> */}
				<td><button className="btn btn-primary" onClick={addToCart}>Add To Cart</button></td>
			</tr>
			    
		
			
	)
}

export default TableRow;