import React from "react";
import "./index.css";

export default function Modal(props) {
  const defaultProp = { // 默认属性，data是把默认属性和传入的属性进行混合
    bg: "rgba(0,0,0,0.5)",
  };
  const data = Object.assign({}, defaultProp, props);
  return (
    <div
      className="modal"
      style={{
        background: data.bg,
      }}
      onClick={(e) => {
        if (e.target.className === "modal") {
            data.onClose();
        }
      }}
    >
      <div className="modal-center">
        <button onClick={data.onClose}>关闭</button>
        {data.children}
      </div>
    </div>
  );
}
