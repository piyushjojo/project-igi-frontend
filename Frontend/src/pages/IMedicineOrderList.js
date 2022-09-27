import { useEffect, useState } from "react";
import medinchargeService from "../services/medinchargeService";
import OrderHistoryTable from "../Components/OrderHistoryTable";

function IMedicineOrderList(){

    const [orderhistory, setOrderhistory] = useState([]);

    useEffect(()=>{
        medinchargeService.fetchorders().then(
            (response) => {
              console.log(response);
              setOrderhistory(response.data);
            },
            (error) => {
              console.log(error);
              console.log("Error");
            }
          );
    },[])
    return(
        <div>
            <div>
                <div className="container-fluid col-8" style={{ marginTop: "4%" }}>
                    <OrderHistoryTable orderhistory={orderhistory} />
                </div>
            </div>
        </div>
    )
}
export default IMedicineOrderList;