import React from "react";
import { useAppSelector } from "../../../store/hooks";

const CartCount = () => {
  const length = useAppSelector((state) => {
    let l = 0;
    state.cart.cart_products.map((p) => {
      if (p.amount) {
        l += p.amount;
      }
    });
    return l;
  });
  return <div>{length}</div>;
};

export default CartCount;
