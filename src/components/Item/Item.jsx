import React from 'react';
import '../Item/Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <>
      <div className="main-container">
        
          <Link className='img-holder' to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt={props.breed } /></Link>
        
        <div className="info-holder">
          <div className="left">
            <span className="breed">Breed: {props.breed}</span>
            <span className="price">{props.price}</span>
          </div>
          <div className="right">
          <img src={props.gender} alt="male female" />
          <i class="ri-shopping-cart-line"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
