import React, { useState, useEffect } from "react";
import "./ProductUp.css";
import { Product } from "../../../../extra/types/Product";
import { Article } from "../../../../extra/types/Article";
import { redirect, useNavigate } from "react-router-dom";
interface Props {
  pic: string;
}

const ProductUp: React.FC<Article> = (article: Article): JSX.Element => {
  let navigate = useNavigate();
  const [pic, setPic] = useState<string>();
  useEffect(() => {
    if (article.pictures && article.pictures[0]) {
      setPic(article.pictures[0]);
    }
  }, []);
  return (
    <div
      className="product-up-div"
      onClick={() => {
        navigate(`/detail/${article.id}`);
      }}
    >
      <div className="product-up-box">
        <div className="product-up-pic">
          <img src={article.pictures[0]} alt={article.pictures[0]} />
          {article.discount && article.discount != 0 ? (
            <span>-{article.discount}%</span>
          ) : (
            ""
          )}
        </div>
        <div className="product-up-price">
          <ins className="price">
            {article.discounts && article.discounts.length != 0 ? (
              <span>
                {article?.inventories && article.discount != null
                  ? article.inventories[0].price * article.discount
                  : " "}{" "}
              </span>
            ) : (
              <span>
                {article?.inventories ? article.inventories[0].price : " "}{" "}
              </span>
            )}
          </ins>
          <del className="old-price">
            <span>
              {article?.inventories && article.inventories[0].price != null
                ? article.inventories[0].price
                : ""}{" "}
              $
            </span>
          </del>
        </div>
        <div className="product-up-category">
          <span>
            {/* <div className="product-brand article-name">
              {article.brand ? article.brand : ""}
            </div>
            / */}
            <div className="product-name article-name">
              {article.name ? article.name : undefined}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductUp;
