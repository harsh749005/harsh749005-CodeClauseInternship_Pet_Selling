import React, { useContext } from "react";
import "./CartItem.css";
import ShopContext from "../../context/ShopContext";
const CartItem = () => {
  const {getTotalCartAmount, allAnimalsData, cartItem, removeFromCart } =
    useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
  return (
    <div className="CartItem-main-container">
      <div className="CartItem-Item-container">
        <div className="CartItem-heading-container">
          <div className="heading">Products</div>
          <div className="heading">Name</div>
          <div className="heading">Price</div>
          <div className="heading">Quality</div>
          <div className="heading">Total</div>
          <div className="heading">Remove</div>
        </div>
        <hr />
        {allAnimalsData.map((e) => {
          if (cartItem[e.id] > 0) {
            const priceRange = e.price.replace(/,/g, "").split(" - ");
            const minPrice = parseFloat(priceRange[0].replace("$", ""))
            const quantity = cartItem[e.id];
            const totalPrice = minPrice * quantity; 
            return (
              <div className="CartItem-details">
                <div className="CartItem-image-holder">
                  <img src={e.image} alt="" />
                </div>
                <p className="CartItem-name">{e.breed}</p>
                <p className="CartItem-price">{e.price}</p>
                <input type="text" className="CartItem-quantity" value={cartItem[e.id]} readOnly  />
                <p className="CartItem-total">${totalPrice}</p>
                <i class="ri-close-large-line CartItem-remove" onClick={() => removeFromCart(e.id)}></i>
              </div>
            );
          }
          else{
            return null;
          }
        }
        )}
      </div>
      <div className="CartItem-checkout">
        <div className="CartItem-total">
          <p className="CartItem-total-heading">Cart Totals</p>
          <div className="CartItem-total-details">
            <div>
              <p>Sub Total</p>
              <p>$0</p>
            </div>
            <hr />
            <div>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div>
              <p>Total</p>
              <p>${(totalAmount)}</p>
            </div>
            <hr />
          </div>
        </div>
        <div className="CartItem-discount">
          <p >Apply Promo Code if you have</p>
          <input type="text" />
          <button>Apply Promo</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
