import React from "react";
import { useSelector } from "react-redux";
import "./Navbar.scss";
import { Link } from "react-router-dom";
function Navbar({user}) {
  const { amount } = useSelector((store) => store.cart);
  
  return (
    <nav className="navbar">
      <div className="container">
        <h3 className="navbar-title">UseReducer</h3>
        <div className="navbar-left d-flex gap-4">
        {user?(<p className="navbar-cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <sup>{amount}</sup>
        </p>):""}
        <button className="btn btn-outline-white bg-white" style={{color:"#fff"}}><Link to="/">{user?"Log Out":"Register"}</Link></button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
