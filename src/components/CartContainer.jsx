import React from "react";
import Posts from "./Posts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "../features/cart/cartSlice";
function CartContainer() {
    const { total, cart } = useSelector((store) => store.cart);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(calculateTotals(cart));
    }, [cart]);
  
  return (
    <div>
      <Posts />
      <div className="container">
        <p className="total-price">Total Price:{total}</p>
      </div>
    </div>
  )
}

export default CartContainer