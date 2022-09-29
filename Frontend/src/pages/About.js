import React from "react";
import About1 from "../assets/1_about.jpg";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../styles/About.css";
function About() {
  return (
    <div>
      <div className="about">
        <div
          className="aboutTop h-50"
          style={{ backgroundImage: `url(${About1})` }}
        >
          {/* <img className="d-block w-100" src={About1} alt="First slide" /> */}
        </div>
        <div></div>

        <div className=" container-fluid row mt-5">
          <div className="col-3  border-end  text-uppercase  bold-font">
            THE TRUSTED ONLINE MEDICINE PARTNER
          </div>
          <div className="col-6 border-end   ">
            <strong>
              Who we are - India's most convenient online pharmacy
            </strong>{" "}
            <br />
            <br />
            <p>
              {" "}
              &nbsp; &nbsp; &nbsp; &nbsp; E-pharma is one of India’s most
              trusted pharmacies, dispensing quality medicines at reasonable
              prices to over 7 million happy customers – PAN India. At
              netmeds.com, we help you look after your own health effortlessly
              as well as take care of loved ones wherever they may reside in
              India. You can buy and send medicines from any corner of the
              country - with just a few clicks of the mouse. <br />
              <br />
            </p>
          </div>
          <div className="col-3  review">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-quote"
                viewBox="0 0 16 16"
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              </svg>
            </div>
            <div className="mt-3">
              It's very helpful to buy medicine online. I ordered medicine. Got
              right time delivered and secured. Satiesfied customer service.
              Thanks E-Pharma! <br />
            </div>
            <p className="text-end m-3 fw-bolder">- Venkatnarayanan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
