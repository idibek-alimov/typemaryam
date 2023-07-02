import React, { useState, useEffect } from "react";

import "./Profile.css";
//import axios from "../../extra/axios";
import Axios, { url } from "../../extra/axios";
import { useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import LogOut from "./logout/LogOut";

const Profile = () => {
  const [LogOutShow, setLogOutShow] = useState("");

  let myCredentials = useAppSelector((state) => state.user);

  const navigate = useNavigate();
  let axios = Axios();

  const EmptyEditShow = () => {
    setLogOutShow("");
  };

  return (
    <div className="profile-div">
      <div className="profile-box">
        <div className="profile-boxes-box">
          <div
            className="personal-info-box profile-shadow-hover"
            onClick={() => navigate("detail")}
          >
            <div className="personal-info-top">
              <img src="tshirt.jpg" alt="desert.jpg" className="profile-pic" />
              <span className="profile-username">
                <div>
                  {myCredentials
                    ? myCredentials.username?.toUpperCase()
                    : "not-provided"}
                </div>
                <div className="little-screen-phone">
                  <span className="little-screen-phone-text">9777924569</span>
                </div>
              </span>
            </div>
            <div className="personal-info-bottom">
              <span>
                Telephone <span>9777924569</span>
              </span>
            </div>
          </div>

          <div
            className="deliveries-box profile-shadow-hover"
            onClick={() => navigate("delivery")}
          >
            <div className="personal-info-top">
              <div className="delivery-svg">
                <svg
                  width="26"
                  height="32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.359 31.195a1 1 0 01-.718 0L2.143 27.157a2 2 0 01-1.282-1.866V9.689a1 1 0 011.371-.928l10.397 4.152a1 1 0 00.742 0l10.397-4.152a1 1 0 011.37.928v15.602a2 2 0 01-1.281 1.866l-10.498 4.038zm-9.968-6.32l9.25 3.559a1 1 0 00.718 0l9.25-3.559V11.998l-9.239 3.686a1 1 0 01-.74 0L3.39 11.998v12.877z"
                    fill="#CB11AB"
                  />
                  <path
                    d="M12.52 3.288a1 1 0 01.719 0l6.885 2.649-6.885 2.649a1 1 0 01-.718 0L5.636 5.937l6.885-2.649zM13.24.527a1 1 0 00-.718 0L1.502 4.765a1 1 0 00-.64.934v.476a1 1 0 00.64.934l11.019 4.238a1 1 0 00.718 0l11.019-4.238a1 1 0 00.64-.934V5.7a1 1 0 00-.64-.934L13.238.527z"
                    fill="#CB11AB"
                  />
                </svg>
              </div>
              <span className="delivery-text">Delivery</span>
            </div>
            <div className="personal-info-bottom">
              <span className="next">
                Next <span className="time">not planned</span>
              </span>
            </div>
          </div>
          <div className="discount-box profile-shadow-hover">
            <div className="personal-info-top">
              <div className="delivery-svg discount-number-box">
                <span className="discount-number">31%</span>
              </div>
              <span className="discount-text">Discount</span>
            </div>
            <div className="personal-info-bottom">
              <span className="next">
                Next <span className="time">not planned</span>
              </span>
            </div>
          </div>
        </div>
        {/* <div>
          <div>
            <div className="order-item-list-box">
              {orders
                ? orders.map((order, index) => {
                    return (
                      <div className="order-item-element" key={index}>
                        <OrderCard {...order} />
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        </div> */}
      </div>
      <div className="like-and-purchase-box">
        <div
          className="purchase-box like-and-purchase-item"
          onClick={() => navigate("purchased")}
        >
          <div className="like-and-purchase-item-top">Purchased</div>
          <div className="like-and-purchase-item-bottom">
            <img
              src="tshirt2.jpg"
              alt="tshirt2.jpg"
              className="like-and-purchase-item-img"
            />
          </div>
        </div>
        <div
          className="like-box like-and-purchase-item"
          onClick={() => navigate("liked")}
        >
          <div className="like-and-purchase-item-top">Liked</div>
          <div className="like-and-purchase-item-bottom">
            <img
              src="tshirt5.jpg"
              alt="tshirt2.jpg"
              className="like-and-purchase-item-img"
            />
          </div>
        </div>
        <div
          className="like-and-purchase-item log-out"
          onClick={() => setLogOutShow("log-out")}
        >
          <span>Log out</span>
        </div>
      </div>
      <div
        className="back-grey"
        id={LogOutShow ? "show" : ""}
        onClick={() => setLogOutShow("")}
      ></div>
      <LogOut editShow={LogOutShow} func={EmptyEditShow} />
    </div>
  );
};

export default Profile;
