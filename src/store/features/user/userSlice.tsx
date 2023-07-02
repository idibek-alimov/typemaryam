import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../extra/types/User";

const initialState: User = {
  id: null,
  username: undefined,
  name: "",
  roles: [],
  phoneNumber: "",
  age: 0,
  email: "",
  gender: "",
  address: "",
};

export const userSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.name = action.payload.name;
      state.roles = action.payload.roles;
      state.age = action.payload.age;
      state.email = action.payload.email;
      state.gender = action.payload.gender;
      state.phoneNumber = action.payload.phoneNumber;
      state.address = action.payload.address;
    },
    removeUser: (state) => {
      state = initialState;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
