import "./ProductCard.css";
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../../extra/types/Product";

const ProductCard: FC<Product> = (product): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  const buyClickHandle = () => {
    setIsActive((current) => !current);
  };
  return (
    <div className="wrapper">
      <div className="container">
        <Link className="product-link" to={`/detail/${product.id}`}>
          <div className="top">
            <img className="top" src="product.jpg" alt="nopic" />
          </div>
        </Link>
        <div className={isActive ? "bottom clicked" : "bottom"}>
          <div className="left">
            <div className="details">
              <h4>{product.name}</h4>
              <p>$20</p>
            </div>
            <div className="buy" onClick={buyClickHandle}>
              <i>add</i>
            </div>
          </div>
          <div className="right">
            <div className="done">
              <i>done</i>
            </div>
            <div className="details">
              <h3>{product.name}</h3>
              <p>Added to your cart</p>
            </div>
            <div className="remove" onClick={buyClickHandle}>
              <i>clear</i>
            </div>
          </div>
        </div>
      </div>
      <div className="inside">
        <div className="icon">
          <i className="material-icons">info</i>
        </div>
        <div className="contents">
          <table>
            <tr>
              <th>Width</th>
              <th>Height</th>
            </tr>
            <tr>
              <td>3000mm</td>
              <td>4000mm</td>
            </tr>
            <tr>
              <th>Something</th>
              <th>Something</th>
            </tr>
            <tr>
              <td>200mm</td>
              <td>200mm</td>
            </tr>
            <tr>
              <th>Something</th>
              <th>Something</th>
            </tr>
            <tr>
              <td>200mm</td>
              <td>200mm</td>
            </tr>
            <tr>
              <th>Something</th>
              <th>Something</th>
            </tr>
            <tr>
              <td>200mm</td>
              <td>200mm</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
