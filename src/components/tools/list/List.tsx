import React, { useState, useEffect } from "react";
import "./List.css";
//import { head } from "../../../extra/axios";
import axios from "../../../extra/axios";
//import ProductCard from "../../product/fordeletionproductcard/ProductCard";
import { Product } from "../../../extra/types/Product";
import CircleM from "../../../extra/circlem/CircleM";

interface listOfProduct {
  products: Product[];
}

const List: React.FC<listOfProduct> = ({ products }) => {
  return (
    <div>
      <div className="list-box">
        {products ? (
          products.map((product) => {
            return (
              <div key={product.id}>{/* <ProductCard {...product} /> */}</div>
            );
          })
        ) : (
          <CircleM />
        )}
      </div>
    </div>
  );
};

export default List;
