import React from "react";
import Products from "../components/Products";
import "./home.css";

const Home = () => {
  return (
    <div className="head">
      <h2 className="heading">Welcome to E-Commerce Store</h2>
      <section>
        <h3 className="h3">Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
