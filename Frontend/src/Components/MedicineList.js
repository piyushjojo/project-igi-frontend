import TableRow from "./TableRow";

function MedicineList(props){
    console.log(props.medList[0]+"Abs")
    // return(
    //     <ol>
    //         {props.medList.map((item)=>{
    //             return <li>{item.name}</li>
    //         })}
    //     </ol>
    // );
    return(
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
					 <TableRow med={item}/>
				)}
			</tbody>
		</table>
	)
}
export default MedicineList;