import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { remove } from "../store/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const prod = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <>
      <div className="jumbotron">
        <h1 className=" text-light">Welcome to E-Commerce Store</h1>
        <section>
          <h2 className="text-center text-warning">Your Cart</h2>
        </section>
      </div>
      {prod.map((e) => {
        return (
          <>
            <div className="container">
              <div className="card1 card flex-row">
                <img
                  className="card-img ml-5"
                  src={e.image}
                  alt="img"
                  style={{ height: "18vw", width: "20vw" }}
                ></img>
                <div className="card-body">
                  <h6 className="card-title text-success">{e.title}</h6>
                  <hr></hr>
                  <h6 className="card-text text-danger">{e.price} $</h6>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleRemove(e.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>

    // <div>
    //   <h3>Cart</h3>
    //   <div className="cartWrapper">
    //     {prod.map((e) => {
    //       return (
    //         <>
    //           <div className="cartCard">
    //             <img className="cartImage" src={e.image} alt=""></img>
    //             <h5>{e.title}</h5>
    //             <h5>{e.price} $</h5>
    //             <button className="btn" onClick={() => handleRemove(e.id)}>
    //               Remove
    //             </button>
    //           </div>
    //         </>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default Cart;
