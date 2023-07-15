import { Reducer } from "react";
import { Article } from "../../../../extra/types/Article";
import { ExtraProp } from "./DetailContext";
import { Inventory } from "../../../../extra/types/Inventory";

export enum ArticleActionsKind {
  ADD_ARTICLE = "ADD_ARTICLE",
}
export interface AppActionType {
  type: ArticleActionsKind;
  payload: Article | number;
}

export const articleReducer = (state: Article, action: AppActionType) => {
  const { type, payload } = action;
  switch (type) {
    case ArticleActionsKind.ADD_ARTICLE:
      if (typeof payload === "object" && payload !== null) {
        return { ...payload };
      }
      return state;
    default:
      return state;
  }
};

export enum ExtraActionsKind {
  ADD_MAIN_PIC = "ADD_MAIN_PIC",
  ADD_INVENTORY = "ADD_INVENTORY",
}
export interface ExtraActionType {
  type: ExtraActionsKind;
  payload: string | Inventory;
}

export const extraReducer = (state: ExtraProp, action: ExtraActionType) => {
  const { type, payload } = action;
  switch (type) {
    case ExtraActionsKind.ADD_MAIN_PIC:
      if (typeof payload === "string" && payload !== null)
        return { ...state, mainPic: payload };
      else return state;
    case ExtraActionsKind.ADD_INVENTORY:
      if (typeof payload === "object") {
        return { ...state, chosenInventory: payload };
      } else return state;
    default:
      return state;
  }
};
