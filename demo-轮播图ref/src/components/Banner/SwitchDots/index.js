import React, { Component } from "react";
import "./index.css";
import propTypes from "prop-types";

export default class SwitchDots extends Component {
  static propsTypes = {
    imgSrcs: propTypes.arrayOf(propTypes.string),
    nowIndex: propTypes.number,
    onChange: propTypes.func,
  };
  render() {
    const dots = [];
    for (let index = 0; index < this.props.imgSrcs.length; index++) {
      dots.push(
        <span
          key={index}
          className={this.props.nowIndex === index ? "dot active" : "dot"}
          onClick={() => {
            this.props.onChange && this.props.onChange(index);
          }}
        ></span>
      );
    }
    return <div className="dots-container">{dots}</div>;
  }
}
