import logo from "../payment_processing.png";
import "../App.css";
import { useNavigate } from "react-router-dom";

function PaymentProcessing() {
  if (localStorage.getItem("id") == null) {
    window.location.href = "/signin";
  }
  var navigate = useNavigate();
  setTimeout(function () {
    navigate("/ordersummary");
  }, 5000);
  return (
    <div className="App">
      <div style={{ marginTop: "8%" }}>
        <h3 className="text-center" style={{ color: "red" }}>
          Payment Processing......{" "}
        </h3>
        <h4 className="text-center">Please Do Not Press Back Button</h4>
        <header className="App-header">
          <img src={logo} className="App-logo" />
        </header>
      </div>
    </div>
  );
}
export default PaymentProcessing;
