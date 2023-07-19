import React, { useState, useEffect } from "react";
import "./ItemCard.css";
import { CartArticle } from "../../../store/features/cart/cartSlice";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import { Article } from "../../../extra/types/Article";
const ItemCard: React.FC<Article> = (article: Article): JSX.Element => {
  return (
    <div className="item-card-div">
      <img src={article.pictures[0]} className="item-card-image" />
      <div className="item-card-price">{article.inventories[0].price}</div>
      <div className="item-card-brand-name">
        {article.brand} / {article.name}
      </div>
      
    </div>
  );
};

export default ItemCard;
