import React from "react";
import "./ImageScroll.css";

const ImageScroll = (data: string[]) => {
  return (
    <div className="image-scroll-box">
      {data != null && data.length > 0
        ? data.map((pic, index) => {
            return <img src={pic} key={index} alt="N" />;
          })
        : ""}
    </div>
  );
};

export default ImageScroll;
