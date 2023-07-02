import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import ProfileDetail from "./profileDetail/ProfileDetail";
import Deliveries from "./deliveries/Deliveries";
import Purchased from "./purchased/Purchased";
import Liked from "./liked/Liked";

const ProfileWrapper = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="detail/" element={<ProfileDetail />} />
        <Route path="delivery/" element={<Deliveries />} />
        <Route path="purchased/" element={<Purchased />} />
        <Route path="liked/" element={<Liked />} />
      </Routes>
    </div>
  );
};

export default ProfileWrapper;
