import React, { useState, useEffect } from "react";
import "./Resent.css";
import axios from "axios";
import { useAppSelector } from "../../../store/hooks";
import { Product } from "../../../extra/types/Product";
const Resent = () => {
  let access_token = useAppSelector((state) => state.token.access_token);
  const [products, setProducts] = useState<Product[]>();

  ////////////////////////////////
  let custom_headers = access_token
    ? { Authorization: String("Bearer " + access_token) }
    : { Authorization: String("") };

  const axioss = axios.create({
    headers: custom_headers,
    baseURL: "http://localhost:8080/api/product",
  });

  ///////////////////////////////////
  useEffect(() => {
    axioss
      .get(`http://localhost:8080/api/product/resentvisited/${2}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="resent-div">
      <div className="resent-text">
        <h5>You recently viewed items</h5>
      </div>
      <div className="resent-product-list">
        {products ? (
          products.map((product) => {
            return (
              <div className="resent-product">
                <ResentItem {...product} />
              </div>
            );
          })
        ) : (
          <div>sdfsf</div>
        )}
      </div>
    </div>
  );
};

export default Resent;

const ResentItem: React.FC<Product> = (product): JSX.Element => {
  return (
    <div className="resent-item-div">
      <div>
        <div className="item-img-box">
          <img src="desert.jpg" alt="desert.jpg" />
        </div>
        <div className="item-rest-box">
          <div className="item-name">{product.name}</div>
          <div className="item-price">$100.00</div>
          <div className="item-button">
            <button className="button">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
