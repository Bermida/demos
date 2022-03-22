import React from "react";
import resetScroll from "./resetScroll";

// 方法1：使用高阶组件
export default function withScroll(Comp) {
  return class ScrollWrapper extends React.Component {
    componentDidMount() {
      resetScroll();
    }
    render() {
      return <Comp />;
    }
  };
}
