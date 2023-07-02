import { FC, useState, useEffect } from "react";

import "./CartItem.css";

import axios from "axios";
import { useParams } from "react-router-dom";
import CircleM from "../../../../extra/circlem/CircleM";
import { useDispatch } from "react-redux";
import {
  CartArticle,
  removeFromCart,
} from "../../../../store/features/cart/cartSlice";

const CartItem: FC<CartArticle> = (article): JSX.Element => {
  const dispatch = useDispatch();

  const onRemoveFromCartHandle = () => {
    dispatch(removeFromCart(article.id));
  };

  return (
    <div className="cart-item-box">
      {article ? (
        <div className="product-box">
          <div className="image-box">
            <img src="desert.jpg" alt="desert.jpg" />
          </div>
          <div className="product-right">
            <div className="product-info-box">
              <div className="product-name">
                <span>{"sdf".toUpperCase()}</span>
              </div>
              <div className="product-price">100</div>
            </div>
            <div className="product-detail">
              <li className="available">available</li>
              <li className="color">
                Color: <span>red</span>
              </li>
              <li className="color">
                Size:{" "}
                <span>
                  {article.inventory.size ? article.inventory.size : ""}
                </span>
              </li>
            </div>
            <div className="product-bottom">
              <select defaultValue={"1"}>
                <option value="0">delete</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <i></i>
              <div>Delete</div>
              <i></i>
            </div>
          </div>
        </div>
      ) : (
        <CircleM />
      )}
    </div>
  );
};
export default CartItem;
