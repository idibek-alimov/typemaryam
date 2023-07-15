import React from "react";
import "./BigPicList.css";
import { useGlobalContext } from "../DetailContext";
import { ExtraActionsKind } from "../detailReducer";
const BigPicList = () => {
  let { article, extra, extraDispatch } = useGlobalContext();
  return (
    <div className="big-picture-list-box">
      {article.pictures.map((pic, index) => (
        <div
          className={
            pic === extra?.mainPic
              ? "picture-wrapper chosen-picture"
              : "picture-wrapper"
            // "picture-wrapper " + pic === extra?.mainPic ? " chosen-picture" : ""
          }
          id={pic === extra?.mainPic ? "chosen-picture" : ""}
          onClick={() => {
            extraDispatch({
              type: ExtraActionsKind.ADD_MAIN_PIC,
              payload: pic,
            });
          }}
          key={index}
        >
          <img src={pic} alt="1" />
        </div>
      ))}
    </div>
  );
};

export default BigPicList;
