import React from "react";
import animationVideo from "../assets/animation.mp4";

function Homepage() {
  return (
    <>
      <video width="100%" autoPlay muted loop>
        <source src={animationVideo} />
        Sorry, your browser doesn't support videos.
      </video>
    </>
  );
}

export default Homepage;
