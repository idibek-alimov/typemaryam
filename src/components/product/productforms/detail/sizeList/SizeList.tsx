import React from "react";
import "./SizeList.css";
import { useGlobalContext } from "../DetailContext";
import { ExtraActionsKind } from "../detailReducer";
interface SizeProp {
  inStock: boolean;
  size: string;
  id: number;
}
function SizeList() {
  let { article, extra, extraDispatch } = useGlobalContext();
  const Size = ({ size, id, inStock }: SizeProp) => {
    return (
      <div
        className="size-box"
        style={inStock ? {} : { borderColor: "lightgray", color: "lightgray" }}
        id={
          extra?.chosenInventory && extra?.chosenInventory.id === id
            ? "chosen-size"
            : ""
        }
      >
        {size}
      </div>
    );
  };
  if (article.inventories.length > 1 && article.inventories[0].size)
    return (
      <div className="size-list-box">
        <div className="size-list-text">Таблица размеров</div>
        <div className="size-list-item-wrapper">
          {article.inventories.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  if (item.inStock)
                    extraDispatch({
                      type: ExtraActionsKind.ADD_INVENTORY,
                      payload: item,
                    });
                }}
              >
                <Size size={item.size} id={item.id} inStock={item.inStock} />
              </div>
            );
          })}
        </div>
      </div>
    );
  else return <div></div>;
}

export default SizeList;
