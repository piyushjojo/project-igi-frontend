import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="container-fluid ">
      <div
        className="row justify-content-center align-items-center "
        style={{ height: "80vh" }}
      >
        <div className="col-3 ">
          <Link to="/patient/signin">
            <button className="btn btn-primary">Patient SignIn</button>{" "}
          </Link>
        </div>
        <div className="col-3">
          <Link to="/labincharge/signin">
            <button className="btn btn-primary">Lab Incharge SignIn</button>{" "}
          </Link>
        </div>
        <div className="col-3">
          <Link to="/medincharge/signin">
            <button className="btn btn-primary">
              Medicine Incharge SignIn
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
