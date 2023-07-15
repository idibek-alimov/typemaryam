import React, { useState, useEffect } from "react";
import "./ArticleChoose.css";
import { Article } from "../../../../../extra/types/Article";
import Axios, { url } from "../../../../../extra/axios";
import { useGlobalContext } from "../DetailContext";
import { useNavigate, useNavigation } from "react-router-dom";
import { ArticleActionsKind, ExtraActionsKind } from "../detailReducer";

const ArticleChoose = () => {
  const [articles, setArticles] = useState<Article[]>();
  let { article, articleDispatch, extraDispatch } = useGlobalContext();

  let navigate = useNavigate();
  let axios = Axios();

  useEffect(() => {
    axios
      .get(url + `/api/article/allow/colors/${article.product_id}`)
      .then((res) => {
        console.log(res.data);
        setArticles(res.data);
      });
  }, []);
  let onClickHandle = (id: number) => {
    window.history.replaceState("1", String(article.id), String(id));
    axios
      .get(url + `/api/article/allow/${id}`)
      .then((res) => {
        if (articleDispatch)
          articleDispatch({
            type: ArticleActionsKind.ADD_ARTICLE,
            payload: res.data,
          });
        extraDispatch({
          type: ExtraActionsKind.ADD_MAIN_PIC,
          payload: res.data.pictures[0],
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="article-choose-box">
      {articles &&
        articles.map((item, index) => {
          return (
            <div
              className="article-choose-pic-wrapper"
              key={index}
              id={article.id == item.id ? "chosen" : ""}
              onClick={() => onClickHandle(item.id)}
            >
              <img src={item.pictures[0]} className="article-choose-pic" />
            </div>
          );
        })}
    </div>
  );
};

export default ArticleChoose;
