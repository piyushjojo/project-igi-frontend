import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import home_img from "../assets/New Project.png";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";
import car4 from "../assets/car4.jpg";

function Carousell() {
  return (
    <Carousel fades controls={false}>
      <Carousel.Item interval={1500}>
        <img className="d-block w-100" src={car1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          // src="https://picsum.photos/1280/300?medicine"
          src={car2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img className="d-block w-100" src={car3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img className="d-block w-100" src={car4} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousell;
