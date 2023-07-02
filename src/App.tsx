import React, { useEffect, useState } from "react";
import axios from "axios";
import Top from "./components/base/Top";
import Nav from "./components/nav/Nav";
import ProductCard from "./components/product/fordeletionproductcard/ProductCard";
import { useAppSelector, useAppDispatch } from "./store/hooks";
import { addUser } from "./store/features/user/userSlice";
import Bottom from "./components/base/Bottom";
import Axios, { url } from "./extra/axios";

function App() {
  const access_token = useAppSelector((state) => state.token.access_token);
  const dispatch = useAppDispatch();

  const axios = Axios();
  useEffect(() => {
    // if (user.username?.length === 0) {
    axios.get(url + "/api/user/user/current").then((res) => {
      dispatch(addUser(res.data));
    });
    // }
  }, [access_token]);

  return (
    <div>
      <Top />
      <Nav />
      <Bottom />
    </div>
  );
}

export default App;
