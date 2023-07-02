import React from "react";
import { Route, Routes } from "react-router-dom";
import ByTag from "../list/bytag/ByTag";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import SearchList from "../list/searchlist/SearchList";
import Login from "../auth/login/Login";
import Signup from "../auth/signup/Signup";
import Logout from "../auth/logout/Logout";
import Main from "../list/main/Main";
import CartList from "../cart/CartList";
//import Profile from "../profile/Profile";
import Detail from "../product/detail/Detail";
import Success from "../cart/orderSuccess/Success";
import ProfileWrapper from "../profile/ProfileWrapper";
const Nav = () => {
  const product = useAppSelector((state) => state.stageone);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id/" element={<Detail />} />
        {/* <Route path="create/*" element={<CreateProduct />} /> */}
        <Route path="search/" element={<SearchList />} />
        <Route path="login/" element={<Login />} />
        <Route path="signup/" element={<Signup />} />
        <Route path="logout/" element={<Logout />} />
        <Route path="cart" element={<CartList />} />
        <Route path="cart/order/success" element={<Success />} />
        <Route path="profile/*" element={<ProfileWrapper />} />
      </Routes>
    </div>
  );
};

export default Nav;