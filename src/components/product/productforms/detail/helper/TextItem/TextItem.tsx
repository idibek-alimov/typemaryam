import React from "react";

interface TextProp {
  name: string;
  text: string;
}

function TextItem({ name, text }: TextProp) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        color: "gray",
        marginTop: 0,
        marginBottom: 10,
      }}
    >
      <div>{name}:</div>
      <div style={{ color: "black", marginLeft: 10 }}> {text}</div>
    </div>
  );
}

export default TextItem;
