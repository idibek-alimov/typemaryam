import React from "react";
import "./LList.css";
import ProductL from "../../product/productforms/productL/ProductL";
const LList = () => {
  return (
    <div className="l-list-div">
      <div className="l-list-box">
        {["tshirt.jpg", "tshirt2.jpg", "tshirt3.jpg", "tshirt4.jpg"].map(
          (p) => {
            return <ProductL pic={p} />;
          }
        )}
      </div>
    </div>
  );
};

export default LList;
