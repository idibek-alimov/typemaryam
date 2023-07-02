import React from "react";
import "./RList.css";
import ProductR from "../../product/productforms/product-r/ProductR";
const RList = () => {
  return (
    <div className="r-list-div">
      <div className="r-list-box">
        {[
          "tshirt.jpg",
          "tshirt2.jpg",
          "tshirt3.jpg",
          "tshirt4.jpg",
          "tshirt5.jpg",
          "tshirt5.jpg",
          "tshirt2.jpg",
          "tshirt2.jpg",
          "tshirt3.jpg",
          "tshirt4.jpg",
          "tshirt5.jpg",
          "tshirt5.jpg",
        ].map((p) => {
          return <ProductR pic={p} />;
        })}
      </div>
    </div>
  );
};

export default RList;
