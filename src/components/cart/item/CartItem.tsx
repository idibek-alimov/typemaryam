import { FC, useState, useEffect } from "react";

import "./CartItem.css";

import axios from "axios";
import { useParams } from "react-router-dom";
import CircleM from "../../../extra/circlem/CircleM";
import { useDispatch } from "react-redux";
import {
  CartArticle,
  removeFromCart,
  changeAmount,
} from "../../../store/features/cart/cartSlice";

// import { CartArticle } from "../../../store/features/cart/cartSlice";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineDelete,
} from "react-icons/ai";
const CartItem: FC<CartArticle> = (article): JSX.Element => {
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(article.amount);
  const [pic, setPic] = useState<string>(
    "/uploads/" + article.pictures[0] //.src.split("/").pop()
  );

  console.log(article);
  const onRemoveFromCartHandle = () => {
    dispatch(removeFromCart(article.id));
  };
  const onChangeAmountHandle = (crease: string) => {
    if (crease === "increase" && amount !== undefined) {
      dispatch(
        changeAmount({
          id: article.id,
          inventoryId: article.inventory.id,
          size: article.inventory,
          amount: amount + 1,
        })
      );
      setAmount(amount + 1);
    } else if (crease === "decrease" && amount !== undefined && amount > 1) {
      dispatch(
        changeAmount({ inventoryId: article.inventory.id, amount: amount - 1 })
      );
      setAmount(amount - 1);
    }
  };
  useEffect(() => {
    setPic("/uploads/" + article.pictures[0]); //.src.split("/").pop());
    setAmount(article.amount);
  }, [article]);
  return (
    <div className="cart-item-box">
      {article ? (
        <div className="product-box">
          <div className="image-box">
            <img src={article.pictures[0]} alt="dsert.jpg" />
          </div>

          <div className="product-right">
            <div className="product-info-div">
              <div className="product-info-box">
                <div className="product-name">
                  <span>{"name".toUpperCase()}</span>
                </div>
              </div>
              <div className="product-detail">
                <li className="available">available</li>
                <li className="color">
                  {article.color ? (
                    <>
                      "Color:" <span>{article.color}</span>
                    </>
                  ) : (
                    ""
                  )}
                </li>
                <li className="color">
                  Size: <span>{article.inventory.size}</span>
                </li>
              </div>
            </div>
            <div className="product-bottom">
              <div className="amount-change">
                <div
                  className="amount-change-button"
                  onClick={(event) => onChangeAmountHandle("decrease")}
                >
                  −
                </div>
                <div className="amount-number">{amount}</div>
                <div
                  className="amount-change-button"
                  onClick={(event) => onChangeAmountHandle("increase")}
                >
                  +
                </div>
              </div>
              <div className="delete-box">
                <div
                  onClick={(event) =>
                    dispatch(
                      removeFromCart({ inventoryId: article.inventory.id })
                    )
                  }
                  className="delete"
                >
                  delete
                </div>
              </div>
            </div>
            <div className="product-price">
              <ins>
                {article.inventory.price && amount
                  ? article.inventory.price * amount
                  : ""}
              </ins>
              <del>
                {article.inventory.price && amount
                  ? Math.floor(article.inventory.price * amount)
                  : ""}
              </del>
            </div>
          </div>

          <div className="product-right-small-screen">
            <div className="product-price">
              <ins>
                {article.inventory.price && amount
                  ? article.inventory.price * amount
                  : ""}
              </ins>
              <del>
                {article.inventory.price && amount
                  ? Math.floor(article.inventory.price * amount)
                  : ""}
              </del>
            </div>
            <div className="product-name">
              <span>{article.name}</span>
            </div>
            <div className="product-color">Color: {article.color}</div>
            <div className="amount-to-delete">
              <div className="amount-change-small">
                <div
                  className="amount-change-button"
                  onClick={(event) => onChangeAmountHandle("decrease")}
                >
                  −
                </div>
                <div className="amount-number">{amount}</div>
                <div
                  className="amount-change-button"
                  onClick={(event) => onChangeAmountHandle("increase")}
                >
                  +
                </div>
              </div>
              <div className="delete-box">
                <div
                  onClick={(event) =>
                    dispatch(
                      removeFromCart({ inventoryId: article.inventory.id })
                    )
                  }
                  className="delete"
                >
                  <AiOutlineDelete />
                </div>
              </div>
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
