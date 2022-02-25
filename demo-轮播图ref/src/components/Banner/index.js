import React, { Component } from "react";
import propTypes from "prop-types";
import ImgContainer from "./ImgContainer";
import SwitchArrow from "./SwitchArrow";
import SwitchDots from "./SwitchDots";
import "./index.css";

export default class Banner extends Component {
  static propTypes = {
    imgSrcs: propTypes.arrayOf(propTypes.string).isRequired, // 数组，图片的地址
    width: propTypes.number.isRequired, // 轮播图的宽度
    height: propTypes.number.isRequired, // 轮播图的高度
    switchDuration: propTypes.number.isRequired, // 切换图片的时间间隔
    autoDuration: propTypes.number.isRequired, // 自动切换图片的时间间隔
  };
  static defaultProps = {
    imgSrcs: [],
    width: 520,
    height: 280,
    switchDuration: 500,
    autoDuration: 2000,
  };
  state = {
    curIndex: 0,
  };
  timer = null;
  autoSwitch = () => {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      let cur = this.state.curIndex;
      cur = (cur + 1) % this.props.imgSrcs.length;
      this.handleSwitch(cur);
    }, this.props.autoDuration);
  };
  componentDidMount() {
    this.autoSwitch();
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  getImgContainer = (ele) => {
    this.refImgContainer = ele;
  };
  handleSwitch = (index) => {
    this.setState({
      curIndex: index,
    });
    this.refImgContainer.switchTo(index);
  };
  handleChange = (direction) => {
    let newIndex = this.state.curIndex;
    if (direction === "left") {
      newIndex--;
      if (newIndex < 0) {
        newIndex = this.props.imgSrcs.length - 1;
      }
    } else {
      newIndex++;
      if (newIndex > this.props.imgSrcs.length - 1) {
        newIndex = 0;
      }
    }
    this.handleSwitch(newIndex);
  };
  render() {
    return (
      <div
        className="banner-container"
        style={{
          width: this.props.width,
          height: this.props.height,
        }}
        onMouseEnter={() => {
          clearInterval(this.timer);
        }}
        onMouseLeave={() => {
          this.autoSwitch();
        }}
      >
        <ImgContainer
          imgSrcs={this.props.imgSrcs}
          switchDuration={this.props.switchDuration}
          ref={this.getImgContainer}
        />

        <SwitchArrow onChange={this.handleChange} />

        <SwitchDots
          imgSrcs={this.props.imgSrcs}
          nowIndex={this.state.curIndex}
          onChange={this.handleSwitch}
        />
      </div>
    );
  }
}
