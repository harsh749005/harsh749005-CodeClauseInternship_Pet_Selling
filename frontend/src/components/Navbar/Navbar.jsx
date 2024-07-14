import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";
import ShopContext from "../../context/ShopContext";

function Navbar() {
  const [Menu, setMenu] = useState(true);
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>

      <ul className={Menu ? "noMenu" : "showMenu"}>
        <li>
          <Link
            className="link"
            onClick={() => setMenu(true)}
            to="/"
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            className="link"
            onClick={() => setMenu(true)}
            to="/cart"
          >
            Cart
          </Link>
        </li>
        <li>
          <Link
            className="link"
            onClick={() => setMenu(true)}
            to="/login"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            className="link"
            onClick={() => setMenu(true)}
            to="/dog"
          >
            Dog
          </Link>
        </li>
        <li>
          <Link
            className="link"
            onClick={() => setMenu(true)}
            to="/cat"
          >
            Cat
          </Link>
        </li>
        <li>
          <Link
            className="link"
            onClick={() => setMenu(true)}
            to="/bird"
          >
            Bird
          </Link>
        </li>
        <i
          className="ri-close-large-line exit"
          onClick={() => setMenu(true)}
        ></i>
      </ul>

      <div className="nav-login-cart">
        <button>
          <Link className="Loginbtn" to="/login">
            Login
          </Link>
        </button>
        <Link className="cart-link" to="/cart" >
        <i className="ri-shopping-cart-line">
          <div className="dot">{getTotalCartItems()}</div>
        </i></Link>
        <i
          className="ri-menu-3-line Menu"
          onClick={() => setMenu((prev) => !prev)}
        ></i>
      </div>
    </div>
  );
}

export default Navbar;
