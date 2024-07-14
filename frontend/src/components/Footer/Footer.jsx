import React from "react";
import logo from "../assets/logo.png";
import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer-main-container">
      
      <div className="Footer-image-holder">
        <img src={logo} alt="" />
      </div>

      <ul>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="Shop-SocialLinks-holder">
        
      </div>
      <hr />
      <p>Copyright@2024 - All Right Reserved</p>
    </div>
  );
};

export default Footer;
