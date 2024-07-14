import React from 'react'
import { useContext } from "react";
import { useParams } from 'react-router-dom';
import ShopContext from "../context/ShopContext";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ProductDisply from '../components/ProductDisplay/ProductDisply';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = ()=>{
    const { allAnimalsData } = useContext(ShopContext);
    const {productId} = useParams();
   
    const product = allAnimalsData.find((e) => e.id === Number(productId));
    return (
    <div>
        
      <Breadcrumb product={product}/>
      <ProductDisply product={product}/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
