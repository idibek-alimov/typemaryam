import React, { useState, useEffect } from "react";
import "./Deliveries.css";
import { useAppSelector } from "../../../store/hooks";
import Axios, { url } from "../../../extra/axios";
import { Article } from "../../../extra/types/Article";
import UpList from "../../list/uplist/UpList";
import CircleM from "../../../extra/circlem/CircleM";
const Deliveries = () => {
  const [deliveryArticles, setDeliveryArticles] = useState<Article[]>();

  let axios = Axios();

  useEffect(() => {
    axios
      .get(url + "/api/item/user/delivery")
      .then((res) => {
        console.log(res.data);
        let articleList: Article[] = [];
        setDeliveryArticles(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  if (deliveryArticles?.length != 0) {
    return (
      <div>
        {deliveryArticles ? (
          <UpList articles={deliveryArticles} />
        ) : (
          <CircleM />
        )}
      </div>
    );
  } else {
    return (
      <div className="no-deliveries">
        <span>Sorry but you are not expecting any deliveries soon.</span>
      </div>
    );
  }
};

export default Deliveries;
