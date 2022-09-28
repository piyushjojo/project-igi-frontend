import { useEffect, useState } from "react";
import medinchargeService from "../services/medinchargeService";
import OrderHistoryTable from "../Components/OrderHistoryTable";
import Pagination from "../Components/Pagination";

function IMedicineOrderList(){

    const [orderhistory, setOrderhistory] = useState([]);
    const[page,setPage]=useState();
    const[sno,setSno]=useState(0);
    const[arr,setArr]=useState([]);
    console.log(arr.length+" abc");
    useEffect(()=>{
        medinchargeService.fetchorders(0).then(
            (response) => {
              console.log(response);
              console.log(response.data.pageno)
              setOrderhistory(response.data.orderlist);
              setPage(response.data.pageno)
            },
            (error) => {
              console.log(error);
              console.log("Error");
            }
          );
    },[])

    useEffect(()=>{
        var a=[];
        for(let i=0;i<page;i++){
            a.push(i);
          }
          setArr(a);
          console.log(a)
    },[page])

    return(
        <div>
            <div>
                <div className="container-fluid col-9" style={{ marginTop: "4%" }}>
                    <OrderHistoryTable orderhistory={orderhistory} />
                </div>
            </div>
            <nav aria-label="Page navigation example ">
                <ul className="pagination justify-content-center">
                     
                        {   
                            arr.map((item)=>{
                               return <Pagination no={item+1} setOrderhistory={setOrderhistory}/>
                            })
                        }
                </ul>
                        
            </nav>
        </div>
    );
}
export default IMedicineOrderList;