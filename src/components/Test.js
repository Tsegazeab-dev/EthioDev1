import React from "react";
import kk from './Banner/image/reg.jpeg'
function Test() {
    const desImageStyle = {
        backgroundImage: `url(${kk})`,
        height: '100vh'
      }

  return (
    
    <div style={desImageStyle}>
      test
      
    </div>
  );
}

export default Test;
