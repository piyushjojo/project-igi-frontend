import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import patientService from "../services/patientService";
import MedicineList from "../Components/MedicineList";

import "../styles/Contact.css";
import Sidebar from "../Components/Sidebar";

function OrderMed() {
  const [name, setName] = useState("");
  const [medicine, setMedicine]=useState([]);
  

  const handleClick = () => {
    
    
    

    // axios.post(`http://localhost:8080/patient/signin`, login)
    patientService.OrderMedicine(name).then(
      (response) => {
        
        console.log("success");
        console.log(response);
        setMedicine(response.data);
        console.log(medicine)

        
        // window.location.href = "/dashboard";
      },
      (error) => {
        alert("Invalid Login Details", error);
        toast.error("invalid login");
        console.log(error);
        console.log("Error");
      }
    );
  };

  return (
    <div>
      <Sidebar/>
      <div className="col-8 container-fluid border border-3">
      
      <div className="contact">
        <div className="rightSide">
          <h3>Order Medicine</h3>

          <Form>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
              <Input
                id="name"
                name="medicineName"
                placeholder="Enter Medicine Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
            
            <div className="text-center">
              <Button
                disabled={name ? false : true}
                className="btn btn-primary"
                onClick={handleClick}
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <MedicineList medList={medicine}/>
      {/* <Footer/> */}
    </div>
    </div>
    
  );
}

export default OrderMed;