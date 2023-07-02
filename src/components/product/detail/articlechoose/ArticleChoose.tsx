import React, { useState, useEffect } from "react";
import "./ArticleChoose.css";
import { Article } from "../../../../extra/types/Article";
import { Product } from "../../../../extra/types/Product";
import axios from "axios";
import { useAppSelector } from "../../../../store/hooks";
import { url } from "../../../../extra/axios";

type ArticleChooseProp = {
  product_id: number | null;
  func?: (id: number) => void;
};

const ArticleChoose = ({ product_id, func }: ArticleChooseProp) => {
  const [articles, setArticles] = useState<Article[]>();

  const access_token = useAppSelector((state) => state.token.access_token);

  ///////////////////
  let custom_headers = access_token
    ? { Authorization: String("Bearer " + access_token) }
    : { Authorization: String("") };

  const axioss = axios.create({
    headers: custom_headers,
    baseURL: "http://localhost:8080/api/product",
  });
  ///////////////////
  console.log("article choose reloading");
  useEffect(() => {
    console.log(product_id);

    axios.get(url + `/api/article/inproduct/${product_id}`).then((res) => {
      console.log(res.data);
      setArticles(res.data);
    });
    // console.log("printing product");
    // console.log(product?.articles);
    // console.log("after printing product");
    // if (product && product.articles) {
    //   setArticles(product.articles);

    //   console.log(product?.articles);
    // }
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
