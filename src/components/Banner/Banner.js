

import "./Banner.css";
// import image_1 from "./image/pic-01.jpg";
import image_2 from "./image/pic-3.jpg";
import image_3 from "./image/pic-1.jpg";
import image_4 from "./image/Pic-4.jpg";
// import des_img1 from './image/reg.jpeg'
import { useEffect, useState } from "react";
import { Padding } from "@mui/icons-material";
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
  
    { url: `${image_2}` },
    { url: `${image_3}` },
    { url: `${image_4}` },
  ];

  const background = {
    backgroundColor: "rgb(15,78,163,0.9)",
  };
  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: " left",
    backgroundSize: "cover",
    height: "70vh",

    marginTop: "100px",

    // border:"solid 5px black"
   

    
    marginLeft: "30px",

    marginTop: "155px",
    marginLeft: "30px",

  };

  const goToNext = (currentState) => {
    setCurrentState(currentState);
  };
  return (
    <div className="countiner-style">

      <div style={bgImageStyle}>
         
          {/* { <div className="carousel-boult">
            {imageSlide.map((imageSlide, currentState) => (
              <span
                key={currentState}
                onClick={() => goToNext(currentState)}
              ></span>
            ))}
          </div>  */}
         </div>


   
    </div>
  )
}
export default Banner




{/* //       <div style={bgImageStyle}></div>
//     </div>
//   );
// };
// export default Banner; */}

