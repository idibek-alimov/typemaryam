import React from "react";
import "./ProductInfo.css";
import { useGlobalContext } from "../DetailContext";
import ArticleChoose from "../articlechoose/ArticleChoose";
import TextItem from "../helper/TextItem/TextItem";
import SizeList from "../sizeList/SizeList";
const ProductInfo = () => {
  const { extra, article } = useGlobalContext();
  return (
    <div className="product-info-box">
      {article.color && <TextItem name="Color" text={article.color} />}
      <ArticleChoose />
      <SizeList />
    </div>
  );
};

export default ProductInfo;
