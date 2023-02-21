import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel({children,settings}) {
  return (
    <div>
      <Slider {...settings}>
       {children}
      </Slider>
    </div>
  )
}

export default Carousel