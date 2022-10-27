import React from "react";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaTwitterSquare,
  FaPhoneAlt,
  FaVoicemail,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-4 bg-dark text-light mt-5 d-flex justify-content-around align-items-center ">
      <div>
        <strong>Find us</strong>
        <p>
          <FaFacebookF></FaFacebookF> Facebook
        </p>
        <p>
          <FaInstagramSquare></FaInstagramSquare> Instagram
        </p>
        <p>
          <FaTwitterSquare></FaTwitterSquare> Twitter
        </p>
      </div>
      <p className="text-center">Copyright 2020</p>

      <div>
        <strong>Contact Us</strong>
        <p>
          <FaPhoneAlt></FaPhoneAlt> Phone: 01700000000
        </p>
        <p>
          <FaPhoneAlt></FaPhoneAlt> Support: 01700000000
        </p>
        <p>
          <FaVoicemail></FaVoicemail> Email: armanul@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
