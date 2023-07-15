import React, { useEffect, useReducer, useState } from "react";
import "./Detail.css";
import { useNavigate, useParams } from "react-router-dom";
import Axios, { url } from "../../../../extra/axios";
import { Article, emptyArticle } from "../../../../extra/types/Article";
import CircleM from "../../../../extra/circlem/CircleM";
import { ArticleActionsKind, ExtraActionsKind } from "./detailReducer";
import BigPicList from "./bigPicList/BigPicList";
import { MyGlobalContext, useGlobalContext } from "./DetailContext";
import { FiArrowLeft } from "react-icons/fi";
import ProductInfo from "./productInfo/ProductInfo";
import TextItem from "./helper/TextItem/TextItem";
import ToCart from "./toCart/ToCart";
import SmallPicList from "./smallPicList/SmallPicList";
import { articleReducer } from "./detailReducer";

const Detail = () => {
  let { articleDispatch, extraDispatch, article, extra } = useGlobalContext();
  let { id } = useParams();
  let axios = Axios();
  return (
    <MyGlobalContext.Provider
      value={{ article, articleDispatch, extraDispatch, extra }}
    >
      <div className="detail-box">
        <div className="detail-wrapper">
          {article.id != 0 ? (
            <div>
              <TopInfo />
              <div className="bottom-info-wrapper">
                <BigPicList />
                <SmallPicList />
                <div className="main-pic-box">
                  <img src={extra ? extra.mainPic : ""} className="main-pic" />
                </div>
                <ProductInfo />
                <ToCart />
              </div>
            </div>
          ) : (
            <CircleM />
          )}
        </div>
      </div>
    </MyGlobalContext.Provider>
  );
};
export default Detail;

const TopInfo = () => {
  const navigate = useNavigate();
  let { article } = useGlobalContext();
  return (
    <div className="top-info-box">
      <div className="level level1">
        <FiArrowLeft onClick={() => navigate(-1)} />
      </div>
      <div className="level level2">
        {article.brand} / {article.name}
      </div>
      <div className="level level3">
        {/* Article: <span style={{ color: "black" }}>{article.id}</span> */}
        <TextItem name="Article" text={article.id.toString()} />
      </div>
    </div>
  );
};
