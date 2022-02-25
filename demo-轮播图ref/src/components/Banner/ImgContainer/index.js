import React, { Component } from "react";
import propTypes from "prop-types";

export default class ImgContainer extends Component {
  static propTypes = {
    imgSrcs: propTypes.arrayOf(propTypes.string).isRequired, // 数组，图片的地址
    width: propTypes.number.isRequired, // 每张图片的宽度
    height: propTypes.number.isRequired, // 每张图片的高度
    switchDuration: propTypes.number.isRequired, // 切换图片的时间间隔
  };
  static defaultProps = {
    imgSrcs: [],
    width: 520,
    height: 280,
  };

  getDiv = (ele) => {
    this.div = ele;
  };
  timer = null;
  tick = 16;
  /**
   * 切换到第index张图片
   * @param {*} index 要切换的图片的索引，从0开始
   */
  switchTo = (index) => {
    // 保证index不会超出边界
    if (index > this.props.imgSrcs.length - 1) {
      index = this.props.imgSrcs.length - 1;
    } else if (index < 0) {
      index = 0;
    }
    // 得到当前Margin left和目标Margin left
    const targetLeft = -this.props.width * index;
    let curLeft = parseFloat(getComputedStyle(this.div).marginLeft);
    // 根据每次切换拥有的时间switchDuration和每帧切换需要的时间tick，求出一段时间内的运动次数
    const moveTimes = Math.ceil(this.props.switchDuration / this.tick); // 一共要运动多少次：总时间 / 每次运动时间时间
    // 根据总运动距离和总运动次数求出每次运动的距离
    const totalDis = targetLeft - curLeft; // 总共要运动的距离：目标值-当前值
    const dis = totalDis / moveTimes; // 每次要运动的距离：总距离 / 运动次数
    // 每次都加上固定距离dis，直到curTimes达到最大次数
    let curTimes = 0;
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      curTimes++;
      curLeft += dis; // 当前Margin left不断累加
      this.div.style.marginLeft = curLeft + "px"; // 每次都把当前Margin left赋值给dom元素
      if (curTimes === moveTimes) { // 一旦次数到了
        this.div.style.marginLeft = targetLeft + "px"; // 为了防止间隙直接让元素达到目标位置
        clearInterval(this.timer);
      }
    }, this.tick);
  };

  render() {
    const imgs = this.props.imgSrcs.map((item, index) => (
      <img
        style={{
          width: this.props.width,
          height: this.props.height,
          float: "left",
        }}
        key={index}
        src={item}
        alt=""
      />
    ));
    return (
      <div
        ref={this.getDiv}
        style={{
          width: this.props.imgSrcs.length * this.props.width,
          height: this.props.height,
        }}
      >
        {imgs}
      </div>
    );
  }
}
