import TableRow from "./TableRow";

import { Link } from "react-router-dom";

function MedicineList(props){

	
	
    return(
		<div>
			<div>
          		<Link to="/cart"> Cart </Link>
        	</div>
			<table className="table table-hover table-striped table-dark">
			<thead>
				<tr>
                    <th>Id</th>
					<th>Name</th>
                    <th>Manufacturer</th>
					<th>Price</th>
					<th>Quantity</th>
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