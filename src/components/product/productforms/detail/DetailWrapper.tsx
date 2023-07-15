import React, { useEffect, useReducer, useState } from "react";
import Detail from "./Detail";
import Axios, { url } from "../../../../extra/axios";
import { MyGlobalContext, useGlobalContext } from "./DetailContext";
import { Article, emptyArticle } from "../../../../extra/types/Article";
import UpList from "../../../list/uplist/UpList";
import CircleM from "../../../../extra/circlem/CircleM";
import {
  ArticleActionsKind,
  ExtraActionsKind,
  articleReducer,
  extraReducer,
} from "./detailReducer";
import { useLocation, useParams } from "react-router-dom";

const DetailWrapper = () => {
  let [articles, setArticles] = useState<Article[]>([]);
  const [article, articleDispatch] = useReducer(articleReducer, emptyArticle);
  const [extra, extraDispatch] = useReducer(extraReducer, { mainPic: "" });
  let { id } = useParams();
  let axios = Axios();
  // let location = useLocation();
  useEffect(() => {
    // window.scrollTo(0, 0);
    axios
      .get(url + `/api/article/allow/${id}`)
      .then((res) => {
        console.log(res.data);
        if (articleDispatch)
          articleDispatch({
            type: ArticleActionsKind.ADD_ARTICLE,
            payload: res.data,
          });
        axios
          .get(url + `/api/article/allow/category/${res.data.product_id}`)
          .then((response) => {
            console.log("response detail wrapper", response);
            setArticles(response.data);
          })
          .catch((err) => {
            // refresh();
            console.log("err detail wrapper", err);
            // window.location.reload();
          });
        extraDispatch({
          type: ExtraActionsKind.ADD_MAIN_PIC,
          payload: res.data.pictures[0],
        });
        if (article.inventories.length < 2) {
          extraDispatch({
            type: ExtraActionsKind.ADD_INVENTORY,
            payload: res.data.inventories[0],
          });
        }
      })

      .catch((err) => console.log(err));
  }, []);
  return (
    <MyGlobalContext.Provider
      value={{ article, articleDispatch, extraDispatch, extra }}
    >
      <Detail />
      {articles && articles.length !== 0 ? <UpList articles={articles} /> : ""}
    </MyGlobalContext.Provider>
  );
};

export default DetailWrapper;
