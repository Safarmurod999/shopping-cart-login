import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, increment, decrement } from "../features/cart/cartSlice";

export default function Post({ id, title, amount, price, img }) {
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <div className="cart-item-view">
        <img className="cart-item-image" src={img} alt="image" />
        <h2 className="cart-item-name">
          {title} <p className="cart-item-price">{price}$ </p>
        </h2>
      </div>
      <div className="cart-item-control">
        <button
          className="cart-item-btn"
          onClick={() => dispatch(decrement(id))}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <p className="cart-item-amount">{amount}</p>
        <button
          className="cart-item-btn"
          onClick={() => dispatch(increment(id))}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
        <button
          className="cart-item-btn"
          onClick={() => dispatch(removeItem(id))}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
