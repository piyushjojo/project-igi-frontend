import { useEffect,useContext,useState } from "react";
import AppContext from "../Components/context";
import { useNavigate } from "react-router-dom";
function MedicineInCartTableRow(props){
	var appctx=useContext(AppContext);

	var navigate=useNavigate();

	var setter=(e)=>{
		appctx.orderlist.filter(item=>item.med.id==props.item.med.id)[0].quantity=parseInt(e.target.value);
		console.log(appctx.orderlist);
	}
	
	
	
	var deleteFromCart=(e)=>{
		console.log(appctx.orderlist.filter(item=>item.med.id==props.item.med.id));
		console.log(e.target.id+" e target");
		
		for( let i = 0; i < appctx.orderlist.length; i++){ 
			console.log("inside for "+appctx.orderlist[i].med.id+" "+e.target.id)
			if (appctx.orderlist[i].med.id == e.target.id) { 
				console.log("Inside if");
				appctx.orderlist.splice(i, 1); 
			}
		
		}
		navigate("/cart");
		console.log(appctx.orderlist);
		
	}
	return(
		
			<tr>	
				<td>{props.sno}</td>
				<td>{props.item.med.name}</td>
				<td>{props.item.med.manufacturer}</td>
				<td>{props.item.med.price}</td>
				<td><input type="number" min="1" id="quantity" name="quantity" defaultValue={props.item.quantity} onChange={setter}></input></td>
				<td><button className="btn btn-primary" id={props.item.med.id} onClick={deleteFromCart}>Delete</button></td>
			</tr>		
	)
}

export default MedicineInCartTableRow;