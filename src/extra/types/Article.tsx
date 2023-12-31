import { Color } from "./Color";
import { Inventory } from "./Inventory";
import { Picture } from "./Picture";

export interface Article {
  id: number;
  likes: boolean;
  color?: string;
  inventories: Inventory[];
  pictures: string[]; //Picture[];
  product_id: number;
  name: string;
  brand: string;
  gender?: string;
  category?: string;
  description: string;
  discount: number;
  discounts: number[];
}
export interface Discount {
  percentage: number;
}
export const emptyArticle: Article = {
  id: 0,
  likes: false,
  inventories: [],
  pictures: [],
  product_id: 0,
  name: "",
  brand: "",
  description: "",
  discount: 0,
  discounts: [],
};
