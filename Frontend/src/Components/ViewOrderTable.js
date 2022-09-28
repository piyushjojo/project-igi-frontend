import ViewOrderTableRow from "./ViewOrderTableRow";
import { useState } from "react";

function ViewOrderTable(){
    var orderlist = JSON.parse(localStorage.getItem("vieworder"));
    const [sno,setSno]=useState(0);
    return(
        <table className="table border-borderless">
			<thead>
				<tr>
                    <th>Sr No</th>
					<th>Name</th>
                    <th>Quantity</th>
					<th>Price</th>
					<th>Amount</th>
				</tr>
			</thead>
			<tbody>
            {orderlist.map((item,sno)=>
					 <ViewOrderTableRow item={item} sno={sno+1} />
				)}
			</tbody>
            </table>
    )
}
export default ViewOrderTable;