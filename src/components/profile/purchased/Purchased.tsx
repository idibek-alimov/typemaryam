import React, { useState, useEffect } from "react";

import { useAppSelector } from "../../../store/hooks";
import Axios, { url } from "../../../extra/axios";
import { Article } from "../../../extra/types/Article";
import UpList from "../../list/uplist/UpList";
import CircleM from "../../../extra/circlem/CircleM";
const Purchased = () => {
  const [deliveryArticles, setDeliveryArticles] = useState<Article[]>([]);

  let axios = Axios();
  useEffect(() => {
    axios
      .get(url + "/api/item/user/1")
      .then((res) => {
        console.log(res.data);
        setDeliveryArticles(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {deliveryArticles.length != 0 ? (
        <UpList articles={deliveryArticles} />
      ) : (
        <CircleM />
      )}
    </div>
  );
};

export default Purchased;
