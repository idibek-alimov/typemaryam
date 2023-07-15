import React from "react";
import "./ToCart.css";
import { useGlobalContext } from "../DetailContext";
import { useAppDispatch } from "../../../../../store/hooks";
import { addToCart } from "../../../../../store/features/cart/cartSlice";

function ToCart() {
  let { article, extra } = useGlobalContext();
  let dispatch = useAppDispatch();
  const onAddToCartHandle = (event: React.MouseEvent<HTMLElement>) => {
    if (article && extra?.chosenInventory) {
      dispatch(addToCart({ ...article, inventory: extra.chosenInventory }));
    }
    // else if (!) {
    //   if (func) {
    //     func();
    //   }
    // }
  };
  return (
    <div className="to-cart-box">
      <div className="to-cart-wrapper">
        <div>{article.inventories[0].price}</div>
        <div>
          <button className="cart-button" onClick={onAddToCartHandle}>
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToCart;
