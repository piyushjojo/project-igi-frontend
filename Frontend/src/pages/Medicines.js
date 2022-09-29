import medinchargeService from "../services/medinchargeService";
import { useEffect, useState } from "react";
import MedicineRow from "../Components/MedicineRow";

function Medicine() {
  const [medList, setMedList] = useState([]);
  if (localStorage.getItem("id") == null) {
    window.location.href = "/signin";
  }
  useEffect(() => {
    console.log("Inside orderhistory");
    medinchargeService
      .medicines()
      .then((response) => {
        console.log(response);
        setMedList(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  }, []);

  return (
    <div className="container-fluid col-8">
      <table className=" table table-hover table-striped shadow-lg  text-center mt-5">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Manufacturer</th>
          <th>Edit</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {medList.map((item) => (
            <MedicineRow item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Medicine;
