import React from "react";
import arrow from "../assets/breadcrumbs_arrow.png";
import "./Breadcrumb.css";

const Breadcrumb = (props) => {
  const { product } = props;
  return (
    <div className="Breadcrumb-div">
      HOME <img src={arrow} alt="" className="breadcrumb_icon" />
      SHOP
      <img src={arrow} alt="" className="breadcrumb_icon" />
      {product.category} <img src={arrow} alt="" className="breadcrumb_icon" />
      {product.breed}
    </div>
  );
};

export default Breadcrumb;
