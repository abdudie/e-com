import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div className="navContainer">
      <div className="navWrapper">
        <div className="navLeft">
          <img className="navImg" src="assets/logo1.png" alt="img"></img>
          <span className="logoName">E-Kart</span>
        </div>
        <div className="navRight">
          <Link className="navTop" to="/">
            Home
          </Link>
          <Link className="navTop" to="/cart">
            Cart
          </Link>
          <span className="cartCounter">
            <b>Cart Items: {items.length}</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
