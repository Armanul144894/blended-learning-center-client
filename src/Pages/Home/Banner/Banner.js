import React from "react";
import { Carousel } from "react-bootstrap";
import logo1 from "../../../assets/logo/logo1.png";
import logo2 from "../../../assets/logo/logo2.png";
import logo3 from "../../../assets/logo/logo3.png";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item className="showcase">
        <img className="d-block w-100 img" src={logo1} alt="First slide" />
        <Carousel.Caption className="overlay">
          <h3>Online Education</h3>
          <p className="mx-auto">
            Find the right instructor for you. Choose from many topics, skill
            levels, and languages. Study any topic when it suits you. Explore
            thousands of high-quality courses. Lifetime Access.Expert
            Instructors.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="showcase">
        <img className="d-block w-100 img" src={logo2} alt="Second slide" />

        <Carousel.Caption className="overlay">
          <h3>Online Education</h3>
          <p className="mx-auto">
            Find the right instructor for you. Choose from many topics, skill
            levels, and languages. Study any topic when it suits you. Explore
            thousands of high-quality courses. Lifetime Access.Expert
            Instructors.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="showcase">
        <img
          className="d-block w-100 showcase img"
          src={logo3}
          alt="Third slide"
        />

        <Carousel.Caption className="overlay">
          <h3>Online Education</h3>
          <p className="mx-auto text-justify">
            Find the right instructor for you. Choose from many topics, skill
            levels, and languages. Study any topic when it suits you. Explore
            thousands of high-quality courses. Lifetime Access.Expert
            Instructors.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
