import React from "react";
import "./ProductL.css";
interface Props {
  pic: string;
}
const ProductL = ({ pic }: Props) => {
  return (
    <div className="productL-div">
      <div className="productL-box">
        <img src={pic} alt="ad1.jpg" />
      </div>
    </div>
  );
};

export default ProductL;
