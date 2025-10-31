import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel = ({arr}) => {
    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {
            arr.map(elem=> (
                <div className='w-full' key={elem.id} >
                  <img src={elem.image} alt="" />
                </div>
            ))
        }
      </Slider>
    </div>
  );
};

export default Carousel;