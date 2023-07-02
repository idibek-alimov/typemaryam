import React, { useState, useEffect } from "react";
import "./Similar.css";

import { useAppSelector } from "../../../store/hooks";
import axios from "axios";
import { Article } from "../../../extra/types/Article";
import UpList from "../uplist/UpList";
import { url } from "../../../extra/axios";
interface Prop {
  id: number;
  func: (id: number) => void;
}

const Similar: React.FC<Prop> = ({ id, func }): JSX.Element => {
  const [articles, setArticles] = useState<Article[]>();
  const access_token = useAppSelector((state) => state.token.access_token);

  const helperFunc = (identification: number) => {
    func(identification);
    window.scrollTo(0, 0);
  };
  ///////////////////////////////////////////////////

  let custom_headers = access_token
    ? { Authorization: String("Bearer " + access_token) }
    : { Authorization: String("") };

  const axioss = axios.create({
    headers: custom_headers,
    baseURL: "http://localhost:8080/api/product",
  });

  ///////////////////////////////
  useEffect(() => {
    axioss.get(url + `/api/article/similar/${id}/0/10`).then((response) => {
      setArticles(response.data.content);
      console.log("these are the results");
      console.log(response.data);
    });
  }, [helperFunc]);
  return (
    <div>
      similar prodducts here
      <div>
        {articles ? <UpList articles={articles} func={helperFunc} /> : ""}
      </div>
    </div>
  );
};

export default Similar;
