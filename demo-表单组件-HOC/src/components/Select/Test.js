import React, { Component } from "react";
import Select from "./index";

export default class Test extends Component {
  state = {
    datas: [
      { value: "opt1", text: "类别1" },
      { value: "opt2", text: "类别2" },
      { value: "opt3", text: "类别3" },
      { value: "opt4", text: "类别4" },
    ],
    name: "opt",
    checkedData: "opt1",
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
