import React from "react";
import Products from "../components/Products";
import "./home.css";

const Home = () => {
  return (
    <div className="head">
      <div className="jumbotron">
        <h1 className=" text-light">Welcome to E-Commerce Store</h1>
        <section>
          <h2 className="text-center text-light">Products</h2>
        </section>
      </div>
      <Products />
    </div>
  );
};

export default Home;
