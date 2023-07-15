import React, { createContext, useContext } from "react";
import { Article, emptyArticle } from "../../../../extra/types/Article";
import { Inventory } from "../../../../extra/types/Inventory";

export interface ExtraProp {
  mainPic: string;
  chosenInventory?: Inventory;
}
let data: ExtraProp = { mainPic: "" };
export type GlobalContent = {
  article: Article;
  extra?: ExtraProp;
  articleDispatch?: React.Dispatch<any>;
  extraDispatch: React.Dispatch<any>;
};
export const MyGlobalContext = createContext<GlobalContent>({
  article: emptyArticle,
  extra: data,
  articleDispatch: () => null,
  extraDispatch: () => null,
});

export const useGlobalContext = () => useContext(MyGlobalContext);
