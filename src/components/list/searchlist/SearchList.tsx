import React, { useState, useEffect } from "react";
import List from "../../tools/list/List";
//import axios from "../../../extra/axios";
import axios from "axios";
import { useAppSelector } from "../../../store/hooks";
import { Product } from "../../../extra/types/Product";
import { Article } from "../../../extra/types/Article";
import UpList from "../uplist/UpList";
import { useNavigate } from "react-router-dom";
import { url } from "../../../extra/axios";

const SearchList = () => {
  const [articles, setArticles] = useState<Article[]>();
  let searchText = useAppSelector((state) => String(state.search.text));
  const navigate = useNavigate();

  useEffect(() => {
    console.log("in the searh list");
    axios
      .get(url + `/api/article/allow/search/${searchText}/0/10`)
      .then((response) => {
        console.log(response.data);
        setArticles(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div>{articles ? <UpList articles={articles} /> : ""}</div>;
};
export default SearchList;
