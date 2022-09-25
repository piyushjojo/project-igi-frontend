import TableRow from "./TableRow";

import { Link } from "react-router-dom";

function MedicineList(props){

	
	
    return(
		<div className="py-3">
			<table className="table table-hover table-striped shadow-lg">
			<thead>
				<tr>
                    
					<th className="fw-bolder">Name</th>
                    <th className="fw-bolder">Manufacturer</th>
					<th className="fw-bolder">Price</th>
					{/* <th>Quantity</th> */}
					<th></th>
				</tr>
			</thead>
			<tbody>
				{props.medList.map((item)=>
					 <TableRow med={item} />
				)}
			</tbody>
		</table>
		
		</div>
		
	)
}
export default MedicineList;