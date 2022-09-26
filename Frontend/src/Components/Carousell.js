import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import home_img from "../assets/home.jpg";

function Carousell() {
  return (
    <Carousel fades controls={false}>
      {/* <Carousel.Item interval={1000}> */}
      <Carousel.Item>
        <img className="d-block w-100" src={home_img} alt="First slide" />
        <Carousel.Caption>
          {/* <h3>Patient</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Link to="/signin">
            <button> SignIn</button>{" "}
          </Link> */}
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://picsum.photos/1280/300"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}

      {/* </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://picsum.photos/1280/300"
          alt="Third slide"
        /> */}

      {/* <Carousel.Caption> */}
      {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}

      {/* </Carousel.Caption> */}
      {/* </Carousel.Item> */}
    </Carousel>
  );
}

export default Carousell;
