import React from "react";
import { useGlobalContext } from "../DetailContext";
import "./SmallPicList.css";
import {
  AiOutlineArrowLeft,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Axios, { url } from "../../../../../extra/axios";
import { useAppSelector } from "../../../../../store/hooks";
import { ArticleActionsKind } from "../detailReducer";
const SmallPicList = () => {
  let { article, extra, articleDispatch } = useGlobalContext();

  let axios = Axios();
  const user = useAppSelector((state) => state.user.username);
  const navigate = useNavigate();
  const onLikeHandle = () => {
    if (!user) {
      navigate("/login");
    }
    if (article && user !== undefined && articleDispatch) {
      //      setArticle({ ...article, likes: !article.likes });
      articleDispatch({
        type: ArticleActionsKind.ADD_ARTICLE,
        payload: { ...article, likes: !article.likes },
      });
      axios
        .get(url + `/api/like/${article.id}`)
        .then((res) => {
          console.log("like response", res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div className="small-pic-top-property">
        <div className="icon-box property-box" onClick={() => navigate(-1)}>
          <AiOutlineArrowLeft
            size={30}
            style={{ outlineColor: "white", outline: 1 }}
          />
        </div>
        <div className="like-box property-box" onClick={onLikeHandle}>
          {article.likes ? (
            <AiFillHeart size={30} color="blueviolet" />
          ) : (
            <AiOutlineHeart size={30} />
          )}
        </div>
        <div></div>
      </div>
      <div className="small-pic-list-box" onScroll={(e) => console.log(e)}>
        {article.pictures.map((pic, index) => (
          <img
            src={pic}
            className="small-pic"
            key={index}
            onScroll={(e) => console.log(e)}
          />
        ))}
      </div>
    </div>
  );
};

export default SmallPicList;
