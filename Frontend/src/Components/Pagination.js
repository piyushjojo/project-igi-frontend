import medinchargeService from "../services/medinchargeService";

function Pagination(props) {
  console.log("in pagination ");
  const handleViewOrder = (e) => {
    medinchargeService.fetchorders(e.target.id - 1).then(
      (response) => {
        console.log(response);
        console.log(response.data.pageno);
        props.setOrderhistory(response.data.orderlist);
      },
      (error) => {
        console.log(error);
        console.log("Error");
      }
    );
  };
  return (
    <li className="page-item">
      <button
        onClick={handleViewOrder}
        id={props.no}
        className="btn btn-primary mx-1"
      >
        {props.no}
      </button>
    </li>
  );
}
export default Pagination;
