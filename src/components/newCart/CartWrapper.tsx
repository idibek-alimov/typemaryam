import React from "react";
import { Route, Routes } from "react-router-dom";
import CartList from "./CartList";

const CartWrapper = () => {
  return (
    <div style={{ width: "100%" }}>
      <Routes>
        <Route path="/" element={<CartList />} />
      </Routes>
    </div>
  );
};

export default CartWrapper;
