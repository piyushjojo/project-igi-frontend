import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AppContext from "./context";
import medinchargeService from "../services/medinchargeService";

function OrderHistoryTableRow(props) {
  var navigate = useNavigate();
  var appctx = useContext(AppContext);

  const handleClick = (e) => {
    var ohtrDto = { id: e.target.id, amount: props.orderhistory.amount };
    localStorage.setItem("ohtr", JSON.stringify(ohtrDto));
    appctx.payment_bool = true;

    navigate("/payment");
  };

  const manageOrders = (e) => {
    medinchargeService.updateOrder(e.target.id).then(
      (response) => {
        console.log(response);
        navigate("/medicineorderlist");
      },
      (error) => {
        console.log(error);
        console.log("Error");
      }
    );
  };

  const viewOrder = (e) => {
    medinchargeService.viewOrder(e.target.id).then(
      (response) => {
        console.log(response);
        localStorage.setItem("vieworder", JSON.stringify(response.data));
        navigate("/vieworder");
      },
      (error) => {
        console.log(error);
        console.log("Error");
      }
    );
  };

  return (
    <tr>
      <td>{props.orderhistory.id}</td>
      <td>{props.orderhistory.order_date}</td>
      <td>{props.orderhistory.payment_status}</td>
      <td>{props.orderhistory.order_status}</td>
      <td>{props.orderhistory.amount}</td>
      <td>
        <button
          className="btn btn-primary"
          id={props.orderhistory.id}
          onClick={viewOrder}
        >
          {" "}
          View{" "}
        </button>
      </td>
      <td>
        {props.orderhistory.payment_status == "UNPAID" ? (
          <button
            className="btn btn-primary"
            id={props.orderhistory.id}
            onClick={handleClick}
          >
            {" "}
            Pay{" "}
          </button>
        ) : (
          ""
        )}{" "}
      </td>
      <td className="text-success fw-bolder">
        {props.role == "med" ? (
          props.orderhistory.order_status == "PROCESSING" ? (
            <button
              className="btn btn-primary"
              id={props.orderhistory.id}
              onClick={manageOrders}
            >
              {" "}
              Dispatch{" "}
            </button>
          ) : (
            "DISPATCHED"
          )
        ) : (
          ""
        )}{" "}
      </td>
    </tr>
  );
}
export default OrderHistoryTableRow;
