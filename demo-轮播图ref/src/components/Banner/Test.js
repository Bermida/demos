import React, { Component } from "react";
import Banner from ".";
import src1 from "./img/1.png";
import src2 from "./img/2.png";
import src3 from "./img/3.png";
import src4 from "./img/4.png";
import src5 from "./img/5.png";
import src6 from "./img/6.png";

export default class Test extends Component {
  render() {
    const imgSrcs = [src1, src2, src3, src4, src5, src6];
    return (
      <div>
        <Banner imgSrcs={imgSrcs} />
      </div>
    );
  }
}
