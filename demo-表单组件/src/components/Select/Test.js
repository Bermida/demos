import React, { Component } from "react";
import Select from "./index";

export default class Test extends Component {
  state = {
    datas: [
      { value: "cate1", text: "类别1" },
      { value: "cate2", text: "类别2" },
      { value: "cate3", text: "类别3" },
      { value: "cate4", text: "类别4" },
    ],
    name: "cate",
    checkedData: "cate1",
  };
  render() {
    return (
      <div>
        <Select
          {...this.state}
          onChange={(newData) => {
            this.setState({
              checkedData: newData,
            });
          }}
        />
      </div>
    );
  }
}
