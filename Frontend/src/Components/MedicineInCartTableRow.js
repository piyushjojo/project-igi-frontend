import { useEffect,useContext,useState } from "react";
import AppContext from "../Components/context";
import { useNavigate } from "react-router-dom";
function MedicineInCartTableRow(props){
	var appctx=useContext(AppContext);

	var navigate=useNavigate();

	var setter=(e)=>{
		console.log("In setter")
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

	var minusQty=(e)=>{
		document.getElementById(props.item.med.id).value--;
		document.getElementById(props.item.med.id).dispatchEvent(new Event('input',{bubbles : true}))
		console.log("in minus")
	}

	var addQty=(e)=>{
		document.getElementById(props.item.med.id).value++;
		document.getElementById(props.item.med.id).dispatchEvent(new Event('input',{bubbles : true}))
		console.log("in add")
	}

	return(
		
			<tr>	
				<td>{props.sno}</td>
				<td>{props.item.med.name}</td>
				<td>{props.item.med.manufacturer}</td>
				<td>{props.item.med.price}</td>
				<td className="">
					{/* <tr>
						<div className="input-group-prepend"><td><button onClick={minusQty} className="input-group-text mt-2">-</button></td></div>
						
						<td><input type="number" min="1" id={props.item.med.id} name="quantity" defaultValue={props.item.quantity}  onInput={setter} className="form-control"/></td>
						<td className="input-group-append"><button onClick={addQty} className="input-group-text mt-2">+</button></td>
					</tr> */}
<div className="input-group mb-3">
  <div className="input-group-prepend">
    <button className="btn btn-outline-secondary  btn-dark" type="button" onClick={minusQty}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
</svg></button>
  </div>
  <input type="number" min="1" 
  className="form-control text-center" aria-describedby="basic-addon1" style={{margin:0}} id={props.item.med.id} name="quantity" defaultValue={props.item.quantity}  onInput={setter}/>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary btn-dark fw-bold" type="button" onClick={addQty}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
</svg></button>
  </div>
</div>
				</td>
				<td><button className="btn btn-primary" id={props.item.med.id} onClick={deleteFromCart}>Delete</button></td>
			</tr>		
	)
}

export default MedicineInCartTableRow;