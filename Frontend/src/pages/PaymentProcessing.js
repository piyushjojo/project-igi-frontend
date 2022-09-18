import logo from '../payment_processing.png'
import '../App.css';
import {useNavigate } from "react-router-dom";

function PaymentProcessing(){
    var navigate=useNavigate();
    setTimeout(function() {
        navigate("/yourorders")
      }, 5000);
    return (
        <div className="App">
            <h3 style={{color:"red"}}>Payment Processing...... </h3>
            <h4>Please Do Not Press Back Button</h4>
          <header className="App-header">
            <img src={logo} className="App-logo" />
          </header>
        </div>
      );
}
export default PaymentProcessing;