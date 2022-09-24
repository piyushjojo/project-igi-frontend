import MedicineInCartTableRow from "../Components/MedicineInCartTableRow";
import { useState,useEffect } from "react";
function MedicineInTheCart(props){
    const [sno,setSno]=useState(0);
   

    return(
        <table className="table table-hover table-striped" >
        <thead className="text-center">
            <tr >
                <th style={{"text-align":"center"}}>SrNo</th>
                <th style={{"text-align":"center"}}>Name</th>
                <th style={{"text-align":"center"}}>Manufacturer</th>
                <th style={{"text-align":"center"}}>Price</th>
                <th style={{"text-align":"center"}}>Quantity</th>
            </tr>
        </thead>
        <tbody style={{"text-align":"center"}}>
            {props.order_list.map((item,sno)=>
                 <MedicineInCartTableRow item={item} sno={sno+1}  setOrderlist={props.setOrderlist}/>
            )}
        </tbody>
        </table>
    )
}
export default MedicineInTheCart;