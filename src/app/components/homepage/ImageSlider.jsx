import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CaretLeft, CaretRight } from "phosphor-react";
import { NavLink } from "react-router-dom";

function ImageSlider({ images }) {
  const CustomPrevArrow = (props) => (
    <div
      className="custom-prev-arrow absolute top-[50%] z-20 cursor-pointer"
      onClick={props.onClick}
    >
      <div className="bg-white rounded-full p-2">
        <CaretLeft size={24} />
      </div>
    </div>
  );

  const CustomNextArrow = (props) => (
    <div
      className="custom-next-arrow absolute top-[50%] z-20 right-0 cursor-pointer"
      onClick={props.onClick}
    >
      <div className="bg-white rounded-full p-2">
        <CaretRight size={24} />
      </div>
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 3, // Number of slides to scroll per interaction
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="py-6 px-2">
            <NavLink>
              <Image src={image} alt=""></Image>
            </NavLink>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
