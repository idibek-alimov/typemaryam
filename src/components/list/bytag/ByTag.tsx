import React, { useState, useEffect } from "react";
//import { head } from "../../../extra/axios";
import axios, { head } from "../../../extra/axios";
//import ProductCard from "../../product/fordeletionproductcard/ProductCard";
import { Product } from "../../../extra/types/Product";
import CircleM from "../../../extra/circlem/CircleM";
import List from "../../tools/list/List";
import Trend from "../../trend/Trend";
import Scroll from "../../tools/scroll/horizontileMainScroll/Scroll";
import RList from "../rlist/RList";
import LList from "../llist/LList";
import UpList from "../uplist/UpList";
import Detail from "../../product/detail/Detail";
const ByTag = () => {
  // const [products, setProducts] = useState<Product[]>([
  //   { name: "", id: 0, pics: [] },
  // ]);
  // useEffect(() => {
  //   console.log("in the searh list");
  //   axios.get(`http://localhost:8080/api/product/0/30`).then((response) => {
  //     setProducts(response.data.content);
  //     console.log(response.data.content);
  //   });
  // }, []);
  return (
    <div>
      <Scroll />
      <div>{/* <UpList {...products} /> */}</div>
    </div>
  );
};

export default ByTag;
