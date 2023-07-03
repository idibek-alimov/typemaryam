import React, { useState, useEffect } from "react";
import "./Similar.css";

import { useAppSelector } from "../../../store/hooks";
import axios from "axios";
import { Article } from "../../../extra/types/Article";
import UpList from "../uplist/UpList";
import Axios, { url } from "../../../extra/axios";
interface Prop {
  id: number;
  func: (id: number) => void;
}

const Similar: React.FC<Prop> = ({ id }): JSX.Element => {
  const [articles, setArticles] = useState<Article[]>();

  // const helperFunc = (identification: number) => {
  //   func(identification);
  //   window.scrollTo(0, 0);
  // };
  let axios = Axios();
  useEffect(() => {
    axios
      .get(url + `/api/article/allow/category/${id}`)
      .then((response) => {
        console.log("similar resposne ", response.data);
        setArticles(response.data);
      })
      .catch((res) => console.log(res));
  }, []);
  return (
    <div>
      <div>{articles ? <UpList articles={articles} /> : ""}</div>
    </div>
  );
};

export default Similar;
