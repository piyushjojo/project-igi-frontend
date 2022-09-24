import { useState } from "react";
import patientService from "../services/patientService";
import Navbar2 from "../Components/Navbar copy";

export default function DeleteAccount() {
  const [checkBtn, setCheckBtn] = useState(false);
  const [msg, setMsg] = useState("");

  function handleChange(e) {
    let isChecked = e.target.checked;
    console.log(isChecked);
    setCheckBtn(isChecked);
    if (isChecked) {
      document.getElementById("confirm_msg").innerHTML = "";
    } else {
      document.getElementById("confirm_msg").innerHTML =
        "Please confirm the box";
    }
  }

  function deleteAccount() {
    let id = localStorage.getItem("id");
    if (checkBtn) {
      patientService
        .remove(id)
        .then(console.log("remove ke baad"))
        .then(setMsg("Account deleted Sucessfully."))
        .then(console.log("setmsg ke baad"))
        .then(localStorage.clear())
        .then(console.log("localstorage ke baad"))
        .then(
          setTimeout(() => {
            window.location.href = "/";
          }, 5000)
        )
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      document.getElementById("confirm_msg").innerHTML =
        "Please confirm the box";
    }
  }

  return (
    <div>
      {/* <Navbar2 /> */}
      <div className="container-fluid col-6 text-align-center mt-6">
        <p>Please confirm the deletion of your account.</p>
        <label htmlFor="del">
          <input
            type="checkbox"
            value="del"
            onChange={handleChange}
            id="del"
            name="del"
          />
          confirm
        </label>
        <br />
        <span id="confirm_msg"></span>
        <div className="">
          <button
            id="submit-btn"
            disabled={!{ checkBtn }}
            type="submit"
            className="btn btn-primary"
            onClick={deleteAccount}
          >
            Delete Account
          </button>
        </div>
        <span>{msg}</span>
      </div>
    </div>
  );
}

// <p>Please confirm the deletion of your account.</p>
//         <Checkbox otherProps onChange={(e) => this.handleChange(e)} />
//         <span id="confirm_msg"></span>
//         <div className="">
//           <button
//             id="submit-btn"
//             disabled={!{ check }}
//             type="submit"
//             className="btn btn-primary"
//             onClick={deleteAccount}
//           >
//             Delete Account
//           </button>
//         </div>
//         <span>{msg}</span>
