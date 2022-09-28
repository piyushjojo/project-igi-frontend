function ViewOrderTableRow(props){
    return(
    <tr style={{"borderStyle":"hidden"}}>	
        <td>{props.sno}</td>
        <td>{props.item.medicine.name}</td>
        <td>{props.item.quantity}x</td>
        <td>Rs.{props.item.medicine.price}/-</td>
        <td>{props.item.amount}</td>
    </tr>
    )
}
export default ViewOrderTableRow;