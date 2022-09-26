function OrderHistoryTableRow(props){
    return(
        <tr>
        <td>{props.orderhistory.id}</td>
        {/* <td>{props.orderhistory.patient.name}</td> */}
        <td>{props.orderhistory.order_date}</td>
        <td>{props.orderhistory.payment_status}</td>
        <td>{props.orderhistory.order_status}</td>
        <td>{props.orderhistory.amount}</td>
    </tr>
    )
}
export default OrderHistoryTableRow;