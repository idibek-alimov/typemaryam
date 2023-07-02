import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../../extra/types/Product";
import { act } from "react-dom/test-utils";
import { Article } from "../../../extra/types/Article";
import { Inventory } from "../../../extra/types/Inventory";
export interface CartArticle extends Article {
  inventory: Inventory;
  amount?: number;
}
interface CartSet {
  cart_products: CartArticle[];
}

const initialState: CartSet = {
  cart_products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let contains = false;
      state.cart_products.map((article) => {
        if (
          article.id === action.payload.id &&
          article.inventory.id === action.payload.inventory.id
        ) {
          contains = true;
        }
      });
      if (!contains) {
        state.cart_products.push({
          ...action.payload,
          amount: 1,
          //price: action.payload.inventories[0].price,
        });
      }
    },
    removeFromCart: (state, action) => {
      state.cart_products = state.cart_products.filter(
        (article) => action.payload.inventoryId != article.inventory.id
      );
    },
    changeAmount: (state, action) => {
      console.log("called change amount");
      state.cart_products = state.cart_products.map((item) =>
        item.inventory.id == action.payload.inventoryId
          ? { ...item, amount: action.payload.amount }
          : item
      );
    },
    clearTheCart: (state) => {
      state.cart_products = [];
    },
  },
});

export const { addToCart, removeFromCart, clearTheCart, changeAmount } =
  cartSlice.actions;
export default cartSlice.reducer;
