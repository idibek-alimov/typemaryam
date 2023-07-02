import React, { useState, useEffect } from "react";
import DoubleTop from "./doubletop/DoubleTop";
import "./Top.css";
import Logo from "./logo/Logo";
import Search from "./search/Search";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import Cart from "./cart/Cart";
import Menu from "./menu/Menu";
import { Link } from "react-router-dom";
import { User } from "../../extra/types/User";
import { useAppSelector } from "../../store/hooks";
import { BsSearch } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import SearchWindow from "./search/SearchWindow";
const Top = () => {
  const credentials = useAppSelector((state) => state.user);
  const token = useAppSelector((state) => state.token.access_token);
  const [searchWindowVisible, setSearchWindowVisible] =
    useState<boolean>(false);
  const SwitchSearchWindowVisibility = () => {
    setSearchWindowVisible(!searchWindowVisible);
  };
  return (
    <div className="top-box">
      {/* <DoubleTop /> */}
      <div className="top-bottom-box">
        <Logo />
        <div className="search-div">
          <Search />
        </div>
        <div className="top-bottom-right">
          <Link to="/cart" className="cart-link">
            <Cart />
          </Link>
          {token ? (
            <div className="hello-user">
              hello , {credentials.username?.toUpperCase()}
            </div>
          ) : (
            <div className="auth">
              <Login />
            </div>
          )}
          {/* <Menu /> */}
        </div>
        <div
          className="mobile-search-icon"
          onClick={() => setSearchWindowVisible(!searchWindowVisible)}
        >
          <BiSearch />
        </div>
        <div
          className={
            searchWindowVisible
              ? "search-window-visible requires-no-scroll"
              : "search-window-invisible"
          }
        >
          <SearchWindow func={SwitchSearchWindowVisibility} />
        </div>
      </div>
    </div>
  );
};

export default Top;
