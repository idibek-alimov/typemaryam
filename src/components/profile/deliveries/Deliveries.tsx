import React, { useState, useEffect } from "react";
import "./Deliveries.css";
import { useAppSelector } from "../../../store/hooks";
import Axios, { url } from "../../../extra/axios";
import { Article } from "../../../extra/types/Article";
import UpList from "../../list/uplist/UpList";
import CircleM from "../../../extra/circlem/CircleM";
import ItemCard from "../itemCard/ItemCard";
const Deliveries = () => {
  const [deliveryArticles, setDeliveryArticles] = useState<Article[]>();

  let axios = Axios();

  useEffect(() => {
    axios
      .get(url + "/api/item/user/delivery")
      .then((res) => {
        console.log("delivery data", res.data);
        setDeliveryArticles(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  if (deliveryArticles?.length != 0) {
    return (
      <div className="deliveries-box">
        <div style={{ fontSize: 20, fontWeight: 600 }}>Deliveries</div>
        {deliveryArticles ? (
          <div className="deliveries-wrapper">
            {deliveryArticles.map((item, index) => (
              <ItemCard {...item} key={index} />
            ))}
          </div>
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
