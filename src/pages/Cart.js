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
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {prod.map((e) => {
          return (
            <>
              <div className="cartCard">
                <img className="cartImage" src={e.image} alt=""></img>
                <h5>{e.title}</h5>
                <h5>{e.price} $</h5>
                <button className="btn" onClick={() => handleRemove(e.id)}>
                  Remove
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
