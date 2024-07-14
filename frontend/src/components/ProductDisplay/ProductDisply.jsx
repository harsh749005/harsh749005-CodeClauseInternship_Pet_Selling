import React, { useContext } from 'react'
import './ProductDisply.css'
import ShopContext from '../../context/ShopContext';

const ProductDisply = (props)=> {
  const {product} = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='petDisplay-main-container'>
      <div className="petDisplay-images">
        <div className="left-image-collection">
          <div className="pet-image-holder">
            <img src={product.image} alt="" /></div>
          <div className="pet-image-holder">
            <img src={product.image} alt="" /></div>
          <div className="pet-image-holder">
            <img src={product.image} alt="" /></div>
          <div className="pet-image-holder">
            <img src={product.image} alt="" /></div>
        </div>
        <div className="right-image-collection">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="petDisplay-content">
        <p className='pet-breed-heading'>Breed: {product.breed}</p>
        <div className="pet-information">
          <div className='labelInfo'><label htmlFor="pet-information">Price : </label><div className='pet-price'>{product.price}</div></div>
          <div className='labelInfo'><label htmlFor="pet-information">Gender : </label><img  className='pet-gender' src={product.gender} alt="gender" /></div>
          <div className='labelInfo'><label htmlFor="pet-information">Age : </label><div className="pet-age">2 years</div></div>
          <div className='labelInfo'><label htmlFor="pet-information">Ratings : </label><div className="pet-rating"><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i></div></div>
        </div>
        <div className="pet-description">
        <div>Description : </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas omnis obcaecati vero consectetur sed exercitationem quasi illum nulla, harum voluptatem sapiente laudantium architecto hic.</p>
        </div>
        <div className="pet-healthCare">
          <span>Health and Care : </span>
          <div className="types">
          <div>Daily Exercise</div>
          <div>Health Checkup</div>
          <div>Grooming</div>
          </div>
        </div>
        <div className="pet-personality">
          <span>Personality and Temperament : </span>
          <div className="quality">
          <div>Gental</div>
          <div>Loyal</div>
          <div>Loving</div>
          <div>Protective</div>
          </div>
        </div>
        <button className='cart' onClick={()=>{addToCart(product.id)}}>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductDisply
