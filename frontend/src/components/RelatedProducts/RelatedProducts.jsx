import React from 'react'
import './RelatedProducts.css'
import allAnimalsData from '../assets/allAnimalsData';
import Item from '../Item/Item'
const RelatedProducts = ()=> {
  return (
    <div className='RelatedProducts-main-container'>
      <p>Related Items</p>
      <div className="RelatedProducts-container">
      {allAnimalsData.map((item,i)=>{
        return(
            <Item
            key={i}
            id={item.id}
            image={item.image}
            breed={item.breed}
            price={item.price}
            gender={item.gender}
          />
        )
      })}
      </div>
    </div>
  )
}

export default RelatedProducts
