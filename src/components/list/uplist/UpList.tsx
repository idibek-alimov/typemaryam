import React from "react";
import "./UpList.css";
import ProductUp from "../../product/productforms/ProductUp/ProductUp";
import { Product } from "../../../extra/types/Product";
import { Link } from "react-router-dom";
import { Article } from "../../../extra/types/Article";
import CircleM from "../../../extra/circlem/CircleM";
interface listOfArticles {
  articles: Article[];
  func?: (id: number) => void;
}

const UpList: React.FC<listOfArticles> = ({
  articles,
  func,
}: listOfArticles): JSX.Element => {
  return (
    <div className="up-list-div">
      <div className="up-list-box">
        {articles ? (
          articles.map((article, index) => {
            return (
              <ProductUp {...article} key={index} />
              // <div
              //   onClick={() => {
              //     if (func) {
              //       func(article.id);
              //     }
              //   }}
              //   key={index}
              // >
              // </div>
            );
          })
        ) : (
          <CircleM />
        )}
      </div>
    </div>
  );
};

export default UpList;
