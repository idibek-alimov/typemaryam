import React, { useState, useEffect } from "react";
import "./ArticleChoose.css";
import { Article } from "../../../../extra/types/Article";
import Axios, { url } from "../../../../extra/axios";

type ArticleChooseProp = {
  product_id: number | null;
  func?: (id: number) => void;
};

const ArticleChoose = ({ product_id, func }: ArticleChooseProp) => {
  const [articles, setArticles] = useState<Article[]>();
  let axios = Axios();

  useEffect(() => {
    console.log("product id", product_id);

    axios.get(url + `/api/article/allow/colors/${product_id}`).then((res) => {
      console.log(res.data);
      setArticles(res.data);
    });
  }, []);
  return (
    <div className="article-choose-div">
      {articles
        ? articles.map((article, index) => {
            console.log("printing article");
            console.log(article);
            return (
              <div className="article-choose-box" key={index}>
                {article.pictures ? (
                  <div className="article-choose-wrapper">
                    <img
                      onClick={() => {
                        if (func) {
                          func(article.id);
                        }
                      }}
                      src={
                        "/uploads/" + article.pictures[0] //.src.split("/").pop()
                      }
                    />
                  </div>
                ) : (
                  "no article"
                )}
              </div>
            );
          })
        : "no articles  "}
    </div>
  );
};

export default ArticleChoose;
