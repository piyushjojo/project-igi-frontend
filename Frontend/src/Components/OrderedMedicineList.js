import { useState } from "react";
import OrdersTableRow from "../Components/OrdersTableRow";
function OrderedMedicineList() {
  var order_summary = JSON.parse(localStorage.getItem("order_summary"));
  const [sno, setSno] = useState(0);
  return (
    <table className="table border-borderless">
      <tbody>
        {order_summary.medList.map((item, sno) => (
          <OrdersTableRow order_summary={item} sno={sno + 1} />
        ))}
      </tbody>
    </table>
  );
}
export default OrderedMedicineList;
