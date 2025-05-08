import React, { useContext }  from 'react'
import ShopContext from "../context/ShopContext";
import Item from "../components/Item/Item";
import './Css/Shop.css'
import Footer from '../components/Footer/Footer';
function Shop() {
  const { allAnimalsData } = useContext(ShopContext);;
  return (
    <div className='Shop-main-Container'>

    <p>All Products</p>
    <hr className='Shop-line'/>
    <div className='Shop-Container'>
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
    <Footer/>
    </div>
  )
}

export default Shop
