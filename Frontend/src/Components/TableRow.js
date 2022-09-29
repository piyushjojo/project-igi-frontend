import { useState, useContext } from "react";
import AppContext from "./context";
import { useEffect } from "react";
function TableRow(props) {
  const [quantity, setQuantity] = useState(0);
  const [med, setMed] = useState();
  var appctx = useContext(AppContext);

  var setter = (e) => {
    setMed(props.med);
    setQuantity(e.target.value);
  };

  useEffect(() => {
    appctx.orderlist.forEach((element) => {
      console.log(element.med.id + " in random function");
      if (document.getElementById(element.med.id) != null){
        document.getElementById(element.med.id).disabled = true;
        document.getElementById(element.med.id).innerHTML = "&check; Added";
        document.getElementById(element.med.id).className += " btn-success ";
      }
        
    });
  }, [appctx.orderlist]);

  var addToCart = (e) => {
    e.preventDefault();
    appctx.setOrderlist((orderlist) => {
      console.log();
      var a = orderlist;
      if (orderlist.filter((item) => item.med.id == props.med.id).length == 0) {
        a = [...orderlist, { med: props.med, quantity: 1 }];
      }

      return a;
    });
  };
  return (
    <tr>
      <td>{props.med.name}</td>
      <td>{props.med.manufacturer}</td>
      <td>{props.med.price}</td>
      <td>
        {" "}
        <button
          className="btn btn-primary"
          onClick={addToCart}
          id={props.med.id}
        >
          {" "}
          Add To Cart{" "}
        </button>{" "}
      </td>
    </tr>
  );
}

export default TableRow;
