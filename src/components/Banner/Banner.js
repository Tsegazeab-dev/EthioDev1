import React from "react";
import "./Banner.css";
import image_1 from "../../images/Banner/img-1.jpg"
import image_2 from "../../images/Banner/img-2.jpg";
import image_3 from "../../images/Banner/img-3.jpg";
import image_4 from "../../images/Banner/img-4.jpg";
import { useEffect, useState } from "react";
const Banner = () => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 3) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentState]);

  const imageSlide = [
    { url: `${image_1}` },
    { url: `${image_2}` },
    { url: `${image_3}` },
    { url: `${image_4}` },
  ];

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: " center",
    backgroundSize: "cover",
    height: "70vh",
    marginTop: "120px",
    transition: "all 2s ease-out"
  };

  return (
    <div className="">
      <div style={bgImageStyle}></div>
    </div>
  );
};
export default Banner;
