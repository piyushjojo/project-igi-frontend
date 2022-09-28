import ViewOrderTable from "../Components/ViewOrderTable";
import { useNavigate } from "react-router-dom";
import medinchargeService from "../services/medinchargeService";
import { toast } from "react-toastify";

function ViewOrder(){
    var orderlist = JSON.parse(localStorage.getItem("vieworder"));
    console.log(orderlist)
    var role=localStorage.getItem("role");


  var navigate = useNavigate();

    const manageOrders = (e) => {
        medinchargeService.updateOrder(e.target.id).then(
          (response) => {
            console.log(response);
            toast.success("Order Dispatched")
            setTimeout(()=>{
                navigate("/medicineorderlist");
            },2000)
            
          },
          (error) => {
            console.log(error);
            console.log("Error");
          }
        );
      };

    return(
        
    <div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            className="card shadow-lg mb-6"
            style={{ width: "40rem", marginTop: "4%" }}
          >
            <div className="card-body">
              <h5 className="card-title">Order Details</h5>
              <hr></hr>
              <h6>Address</h6>
              <p className="card-text" style={{ marginBottom: 0 }}>
                {orderlist[0].order.patient.name}
              </p>
              <p className="card-text">{orderlist[0].order.patient.address}</p>
              <h6>Order Date</h6>
              <p className="card-text">{orderlist[0].order.order_date}</p>
              <hr></hr>
              <h6>Medicines Added</h6>
              <ViewOrderTable />
              <hr></hr>
              <table className="table">
                <tr>
                  <td style={{ paddingLeft: 0, textAlign: "start" }}>
                    <h5>Total Amount</h5>
                  </td>

                  <td style={{ textAlign: "end" }}>
                    <h4 className="fw-bolder">
                      Rs.{orderlist[0].order.amount}/-
                    </h4>
                  </td>
                </tr>
              </table>
              <hr></hr>
              <div className="text-center text-success fw-bolder">
              {role == "med" ? ( orderlist[0].order.order_status == "PROCESSING" ? ( <button className="btn btn-primary" id={orderlist[0].order.id} onClick={manageOrders} style={{width:"100%"}}> Dispatch </button> ) : ( "DISPATCHED" ) ) : ( "" )} 
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
export default ViewOrder;