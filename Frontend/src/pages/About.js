import React from "react";
import About1 from "../assets/about.png";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../styles/About.css";
function About() {
  return (
    <div>
      <div className="about">
        <div
          className="aboutTop"
          style={{ backgroundImage: `url(${About1})` }}
        ></div>
        <div></div>

        <p>
          Technology has, in many ways turned world into a village. Almost
          everyone in some way or other is getting benefits of technology that
          we have developed in last 100 years. Due to some landmark innovations
          in science and technology from electricity to computers we have
          managed to build a world that people might not have thought of 200
          years back and that is why life of people in 1800 was a lot similar to
          people 1000 years before them or 1000 years before them but not to us.
        </p>
        <p>
          Technology has brought many such things to us that makes our life
          better and things we want to achieve as a society flawless. Computer
          has made it easy for us to do calculations faster, mechanical designs
          and simulations can be observed without making any structure
          physically thus saving the cost of experiments. These benefits are not
          just limited to scientist or engineering community. Computer has
          changed the life of common man itself. Mobile phone is itself a small
          computer that has changed a lot things in past 20 years. Our
          dependence on it justifiable with how connected we are to the world
          with a small device in our pocket.
        </p>
        <p>
          World has recently seen a pandemic. Most of us never thought of or
          expected to go through such an event. It was a tragic experience for
          world. But internet kept us busy during the lockdown period and we
          realized the importance of online facilities available for us in our
          daily life. Online shopping has been there for a long time which was
          followed by food delivery and medicine delivery at home. This has
          saved a lot of time from our busy schedule. Even hotel booking systems
          has also took our worries about booking hotels in while visiting
          another city.
        </p>
        <p>
          During our course we got to know how these things work and how we see
          it. We realised that there is more to it than what we at the screen.
          It is not easy to make an efficient system that solves the problem,
          but its worth if it is solving a problem for our community. So we
          decided to make it from scratch and learn from basics how things are
          built from foundation.
        </p>
        <p>
          Our Project e-Pharma is designed to make a platform to buy medicine
          online. This allows you to buy medicine from your busy schedule. You
          can add money to our wallet and can pay from it. You can buy medicine
          by searching and adding them to cart and then pay from wallet. If
          payment is successful you’ll get an email about confirmation of order
          and order will be processed. In case you have insufficient amount in
          your wallet then you can navigate to Wallet recharge either from
          dashboard or from payment page to recharge the wallet.
        </p>
      </div>
    </div>
  );
}

export default About;
