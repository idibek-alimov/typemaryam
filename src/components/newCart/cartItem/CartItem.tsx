import React from "react";
import {
  CartArticle,
  changeAmount,
} from "../../../store/features/cart/cartSlice";
import "./CartItem.css";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useAppDispatch } from "../../../store/hooks";
const CartItem = (cartArticle: CartArticle) => {
  let dispatch = useAppDispatch();

  const onChangeAmountHandle = (crease: string) => {
    if (crease === "increase" && cartArticle.amount) {
      dispatch(
        changeAmount({
          id: cartArticle.id,
          inventoryId: cartArticle.inventory.id,
          size: cartArticle.inventory,
          amount: cartArticle.amount + 1,
        })
      );
      //   setAmount(amount + 1);
    } else if (
      crease === "decrease" &&
      cartArticle.amount &&
      cartArticle.amount > 1
    ) {
      dispatch(
        changeAmount({
          inventoryId: cartArticle.inventory.id,
          amount: cartArticle.amount - 1,
        })
      );
      //   setAmount(amount - 1);
    }
  };
  return (
    <div className="cart-item-box">
      <div className="top">
        <img src={cartArticle.pictures[0]} />
        <div className="product-info">
          <div className="price-box">
            <ins>{cartArticle.inventory.price}</ins>
            <del>{cartArticle.inventory.originalPrice}</del>
          </div>
          <div className="name-box">{cartArticle.name}</div>
          {cartArticle.color ? (
            <div className="color-box">{cartArticle.color}</div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="line"></div>
      <div className="under">
        <AiOutlineMinusCircle
          size={25}
          color={
            cartArticle.amount && cartArticle.amount < 2 ? "gray" : "black"
          }
          onClick={(event) => onChangeAmountHandle("decrease")}
        />
        <span className="amount-box">{cartArticle.amount}</span>
        <AiOutlinePlusCircle
          size={25}
          color="rgb(81, 71, 71)"
          onClick={(event) => onChangeAmountHandle("increase")}
        />
      </div>
    </div>
  );
};

export default CartItem;
