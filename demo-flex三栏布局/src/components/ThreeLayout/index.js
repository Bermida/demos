import React from "react";
import "./index.css";

export default function ThreeLayout(props) {
  const defaultProps = {
    leftWidth: 200,
    rightWidth: 200,
    minWidth: 800,
    gap: 10,
  };
  const datas = Object.assign({}, defaultProps, props);
  return (
    <div
      className="wrap"
      style={{
        minWidth: datas.minWidth,
      }}
    >
      <div
        className="main"
        style={{
          border: "2px solid black",
        }}
      >
        {props.children}
      </div>
      <div
        className="left"
        style={{
          flex: `0 0 ${datas.leftWidth}px`,
          border: "2px solid tomato",
          marginRight: datas.gap,
        }}
      >
        {props.left}
      </div>
      <div
        className="right"
        style={{
          flex: `0 0 ${datas.rightWidth}px`,
          border: "2px solid tomato",
          marginLeft: datas.gap,
        }}
      >
        {props.right}
      </div>
    </div>
  );
}
