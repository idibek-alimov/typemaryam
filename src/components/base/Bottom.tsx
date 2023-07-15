import React from "react";
import "./Bottom.css";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineManageSearch } from "react-icons/md";

import { BsFillPersonFill, BsHeart } from "react-icons/bs";
import Cart from "./cart/Cart";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
const Bottom = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const access_token = useAppSelector((state) => state.token.access_token);
  return (
    <div className="bottom">
      {/* <div className="bottom-big-screen">bottom big</div> */}
      <div className="bottom-small-screen">
        <div
          className="bottom-small-item"
          onClick={() => {
            if (location.pathname != "/") {
              navigate("/");
            }
            console.log(location.pathname);
            window.scrollTo(0, 0);
          }}
        >
          <AiFillHome />
        </div>
        <div className="bottom-small-item search">
          <MdOutlineManageSearch />
        </div>
        <div
          className="bottom-small-item cart"
          onClick={() => navigate("/cart")}
        >
          <Cart />
        </div>
        <div
          className="bottom-small-item"
          onClick={() => {
            if (access_token) {
              navigate("/profile/liked");
            } else {
              navigate("/login");
            }
          }}
        >
          <AiOutlineHeart />
        </div>
        <div
          className="bottom-small-item"
          onClick={() => {
            if (access_token) {
              navigate("/profile");
            } else {
              navigate("/login");
            }
          }}
        >
          <BsFillPersonFill />
        </div>
      </div>
    </div>
  );
};

export default Bottom;
