// ShopContextProvider.js
import React, { useState, useEffect } from "react";
import allAnimalsData from "../components/assets/allAnimalsData.js"; // Example path, adjust as needed
import ShopContext from "./ShopContext";

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < allAnimalsData.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getTotalCartAmount = () => {
    let total = 0;
    allAnimalsData.forEach((item) => {
      const priceRange = item.price.replace(/,/g, "").split(" - ");
      const minPrice = parseFloat(priceRange[0].replace("$", ""));
      if (!isNaN(minPrice) && cartItem[item.id] > 0) {
        total += minPrice * cartItem[item.id];
      }
    });
    return total;
  };
  const getTotalCartItems = () => {
    return Object.values(cartItem).reduce((total, count) => total + count, 0);
  }



  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    allAnimalsData,
    cartItem,
    addToCart,
    removeFromCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
