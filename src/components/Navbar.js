import React from "react";
import { Link } from "react-router-dom";
// import "./navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
        <div className="container">
          <a href="" className="navbar-brand">
            E-Kart
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarid"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarid">
            <ul className="navbar-nav text-center ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  <b>Cart Items: {items.length}</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
    // <div className="navContainer">
    //   <div className="navWrapper">
    //     <div className="navLeft">
    //       <img className="navImg" src="assets/logo1.png" alt="img"></img>
    //       <span className="logoName">E-Kart</span>
    //     </div>
    // {
    /* <div className="navRight">
          <Link className="navTop" to="/">
            Home
          </Link>
          <Link className="navTop" to="/cart">
            Cart
          </Link>
          <span className="cartCounter">
            <b>Cart Items: {items.length}</b>
          </span>
        </div> */
    // }
    // <nav className="navbar-expand-sm navbar-dark bg-dark">
    //   <ul className="navbar-nav">
    //     <li className="nav-item">
    //       <Link className="nav-link" to="/">
    //         Home
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link className="nav-link" to="/cart">
    //         Cart
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <span className="nav-link">
    //         <b>Cart Items: {items.length}</b>
    //       </span>
    //     </li>
    //   </ul>
    // </nav>
    //   </div>
    // </div>
  );
};

export default Navbar;
