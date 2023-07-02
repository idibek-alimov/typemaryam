import React, { useState, useEffect } from "react";
//import { head } from "../../../extra/axios";
import Axios, { head, url } from "../../../extra/axios";
import ProductCard from "../../product/fordeletionproductcard/ProductCard";
import { Product } from "../../../extra/types/Product";
import CircleM from "../../../extra/circlem/CircleM";
import List from "../../tools/list/List";
import Trend from "../../trend/Trend";
import Scroll from "../../tools/scroll/horizontileMainScroll/Scroll";
import RList from "../rlist/RList";
import LList from "../llist/LList";
import UpList from "../uplist/UpList";
import Detail from "../../product/detail/Detail";
import { Article } from "../../../extra/types/Article";
import RefreshToken from "../../../extra/refreshToken";
const ByTag = () => {
  const [articles, setArticles] = useState<Article[]>([
    // { name: "", id: 0, pics: [] },
  ]);
  const axios = Axios();
  const refresh = RefreshToken();
  useEffect(() => {
    axios
      .get(url + `/api/article/allow/0/10`)
      .then((response) => {
        setArticles(response.data);
      })
      .catch((err) => {
        // refresh();
        console.log(err);
        // window.location.reload();
      });
  }, []);
  return (
    <div>
      {/* <Scroll /> */}
      <div>
        {articles && articles.length !== 0 ? (
          <UpList articles={articles} />
        ) : (
          <CircleM />
        )}
      </div>
    </div>
  );
};

export default ByTag;
