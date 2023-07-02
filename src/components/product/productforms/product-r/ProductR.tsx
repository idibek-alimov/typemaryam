import React from "react";
import "./Product-R.css";

interface Props {
  pic: string;
}
const ProductR = ({ pic }: Props) => {
  return (
    <div className="productR-div">
      <div className="productR-box">
        <img src={pic} alt="ad1.jpg" />
      </div>
    </div>
  );
};

export default ProductR;
