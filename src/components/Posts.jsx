import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { store } from "../store";
import Post from "./Post";
import "./Posts.scss";

export default function Posts() {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);
  if (cart.length == 0) {
    return (
      <div className="cart">
        <div className="container">
          <h1 className="cart-empty">Your bag is empty now!</h1>
        </div>
      </div>
    );
  } else
    return (
      <div className="cart">
        <div className="container">
          {cart.map((item) => {
            return <Post key={item.id} {...item} />;
          })}
          <button
            className="btn cart-clear"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      </div>
    );
}
