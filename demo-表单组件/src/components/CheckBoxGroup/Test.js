import React, { Component } from "react";
import CheckBoxGroup from "./index";

export default class Test extends Component {
  state = {
    datas: [
      { value: "football", text: "足球" },
      { value: "basketball", text: "篮球" },
      { value: "music", text: "音乐" },
      { value: "movie", text: "电影" },
    ],
    name: "loves",
    checkedDatas: ["football"],
  };

  render() {
    return (
      <div>
        <CheckBoxGroup
          {...this.state}
          onChange={(newArr) => {
            this.setState({
              checkedDatas: newArr,
            });
          }}
        />
      </div>
    );
  }
}
