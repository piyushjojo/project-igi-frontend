import { useState ,useContext} from "react";
import patientService from "../services/patientService";
import AppContext from "./context";
import { Link } from "react-router-dom";
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
		e.target.disabled=true;
		appctx.setOrderlist((orderlist)=>{
			console.log();
			var a=orderlist;
			if(orderlist.filter(
				item=>item.med.id==props.med.id
			).length==0){
				a=[...orderlist,{med:props.med,quantity:1}]
			}
		
			return a;
		});
		
		
		
	}
	return(
		
			<tr>	
				<td>{props.med.id}</td>
				<td>{props.med.name}</td>
				<td>{props.med.manufacturer}</td>
				<td>{props.med.price}</td>
				<td><button className="btn btn-primary" onClick={addToCart}>Add To Cart</button></td>
			</tr>
			    
		
			
	)
}

export default TableRow;