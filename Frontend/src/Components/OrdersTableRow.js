function OrdersTableRow(props) {
  return (
    <tr style={{ borderStyle: "hidden" }}>
      <td>{props.order_summary.medicine.name}</td>
      <td className="text-success fw-bold" style={{ textAlign: "right" }}>
        {props.order_summary.quantity}x
      </td>
      <td className="" style={{ textAlign: "right" }}>
        Rs.{props.order_summary.medicine.price}/-
      </td>
    </tr>
  );
}

export default OrdersTableRow;
