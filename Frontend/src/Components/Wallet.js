import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import patientService from "../services/patientService";
import AppContext from "./context";

function Wallet(){
    const[wallet,setWallet]=useState(0);
    var appctx=useContext(AppContext)
    var id=localStorage.getItem("id");
    patientService
        .GetWallet(id)
        .then((response) => {
            console.log(response.data+" response in wallet")
            appctx.wallet=response.data;
            setWallet(appctx.wallet)
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    
    return(
        <>
           {wallet}
        </>
    )
}
export default Wallet;