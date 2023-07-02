import React, { useState } from "react";
import "./OrderCard.css";
import { CartArticle } from "../../../store/features/cart/cartSlice";
import ItemCard from "../itemCard/ItemCard";
import Cart from "../../base/cart/Cart";
import { Article } from "../../../extra/types/Article";
import { Link } from "react-router-dom";

export interface Item {
  amount: number;
  article: CartArticle;
}

type Order = {
  items: Item[];
  checked: boolean;
  created_at: Date;
  delivered: boolean;
};

const OrderCard: React.FC<Order> = ({
  items,
  checked,
  created_at,
}: Order): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  console.log("inside the thing");
  console.log(checked);
  console.log(created_at.setFullYear, created_at.getDate, created_at.getMonth);
  return (
    <div className="order-card-div">
      <div className="order-card-describe" onClick={() => setOpen(!open)}>
        <div>
          <ul>
            <li className="narrative">ORDER PLACED</li>
            <li className="info">{"Bulllshit"}</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="narrative">TOTAL</li>
            <li className="info">20$</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="narrative">SHIP TO</li>
            <li className="info">some adress</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="narrative">DELIVERED</li>
            <li className="info">{checked ? "YES" : "NO"}</li>
          </ul>
        </div>
      </div>
      <div className="some-parent">
        <div className="order-card-list-box" id={open ? "show" : "hidden"}>
          <div className="order-card-list">
            {items
              ? items.map((item, index) => {
                  return (
                    <div>
                      <Link to={`/detail/${item.article.id}`}>
                        <ItemCard {...item.article} />
                      </Link>
                    </div>
                  );
                })
              : "fsdf"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
