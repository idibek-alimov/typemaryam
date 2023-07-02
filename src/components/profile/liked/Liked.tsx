import React, { useState, useEffect } from "react";
import Axios, { url } from "../../../extra/axios";
import { Article } from "../../../extra/types/Article";
import UpList from "../../list/uplist/UpList";
import CircleM from "../../../extra/circlem/CircleM";
const Liked = () => {
  const [deliveryArticles, setDeliveryArticles] = useState<Article[]>();

  let axios = Axios();
  useEffect(() => {
    axios
      .get(url + "/api/article/user/liked")
      .then((res) => {
        console.log("liked productss", res.data);
        if (res.data) {
          setDeliveryArticles(res.data);
        }
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
    return <div className="no-deliveries"></div>;
  }
};

export default Liked;
