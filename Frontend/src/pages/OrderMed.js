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
import Navbar2 from "../Components/Navbar copy";



function OrderMed() {
  const [name, setName] = useState("");
  const [medicine, setMedicine] = useState([]);

  const handleClick = () => {
    // axios.post(`http://localhost:8080/patient/signin`, login)
    patientService.OrderMedicine(name).then(
      (response) => {
        console.log("success");
        console.log(response);
        setMedicine(response.data);
        console.log(medicine);

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
      <Navbar2/>
              
          <div className="text-center">
            {/* <h3>Order Medicine</h3> */}

            <header className=" bg-dark">
              <div className="container">
                <div className="w-100 d-flex flex-wrap align-items-center justify-content-center">
                  <form
                    className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                    role="search"
                  >
                    <input
                      type="search"
                      className="form-control form-control-dark text-bg-dark"
                      placeholder="Enter Medicine"
                      aria-label="Search"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </form>

                  <div className="text-end">
                    <button disabled={name ? false : true} type="button"  onClick={handleClick} className="btn btn-outline-light me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>  Search
                    </button>
                  </div>
                </div>
              </div>
            </header>
            {/* ==================================================== */}

            {/* <Form>
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
            </Form> */}
          </div>
        
            <div className="container-fluid col-6">
            <MedicineList medList={medicine} />
            </div>
        {/* <Footer/> */}

    </div>
  );
}

export default OrderMed;
