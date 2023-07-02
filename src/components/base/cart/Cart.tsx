import React from "react";
import "./Cart.css";
import CartCount from "./CartCount";
import { BiCart } from "react-icons/bi";
const Cart = () => {
  return (
    <div className="cart_box">
      <BiCart className="cart-icon" />
      <div className="cart-count">
        <CartCount />
      </div>
    </div>
  );
};
export default Cart;
