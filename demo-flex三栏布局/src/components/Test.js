import React, { Component } from "react";
import ThreeLayout from "./ThreeLayout";

export default class Test extends Component {
  render() {
    return (
      <div>
        <ThreeLayout
          left={<p>左边区域的内容</p>}
          right={<p>右边区域的内容</p>}
        >
          <h1>中间区域的内容</h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis itaque culpa excepturi perspiciatis maiores cumque vero dolor nobis nam dicta. Obcaecati facere vero maxime veniam fugiat? Explicabo minus ab ipsa.
        </ThreeLayout>
      </div>
    );
  }
}
