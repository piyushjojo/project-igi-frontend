import { useState } from "react";
import patientService from "../services/patientService";

function AddToCart(props){
const [id,setId]=useState(0);
const [quantity,setQuantity]=useState(0);

		
	var addToCart = (e)=>{
		// setData(e.target.value)
		setId(props.med.id);
		setQuantity(props.qty);
		
		console.log(props+" fygg");
		console.log(props+" gdjkl");
		console.log(e.target.value+" jhbhu");
		const medicine={id,quantity}
		console.log(medicine+" bah");
		

		patientService.medicineAddCart(medicine).then(
			(response) => {

			  console.log("success");
			  console.log(response);
	  
			//   localStorage.setItem("token", response.data.token);
			//   localStorage.setItem("id", response.data.id);
			//   localStorage.setItem("name", response.data.name);
	  
			//   console.log(localStorage.getItem("id"));
			//   console.log(localStorage.getItem("name"));
			//   window.location.href = "/dashboard";
			},(error) => {
				// alert("Invalid Login Details", error);
				// toast.error("invalid login");
				console.log(error);
				console.log("Error");
			  }
			  );
	}
	/*
	    patientService.signin(login).then(
      (response) => {
        console.log(email);
        console.log(password);
        console.log("success");
        console.log(response);

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("name", response.data.name);

        console.log(localStorage.getItem("id"));
        console.log(localStorage.getItem("name"));
        window.location.href = "/dashboard";
      },
      (error) => {
        alert("Invalid Login Details", error);
        toast.error("invalid login");
        console.log(error);
        console.log("Error");
      }
    );
  };
	*/

	return(
		<div>
			<button className="btn btn-primary" onClick={addToCart}>Add To Cart</button>	
		</div>
	)
}
export default AddToCart