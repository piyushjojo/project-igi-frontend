import MedicineInCartTableRow from "../Components/MedicineInCartTableRow";
import { useState,useEffect } from "react";
function MedicineInTheCart(props){
    const [sno,setSno]=useState(0);
   

    return(
        <table className="table table-hover table-striped">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Manufacturer</th>
                <th>Price</th>
                <th>Quantity</th>
            </tr>
        </thead>
        <tbody>
            {props.order_list.map((item,sno)=>
                 <MedicineInCartTableRow item={item} sno={sno+1}  setOrderlist={props.setOrderlist}/>
            )}
        </tbody>
        </table>
    )
}
export default MedicineInTheCart;