import React from "react";
import propTypes from "prop-types";
import types from "../../utils/commonTypes";
import withDataGroup from "../HOC/withDataGroup"
/**
 * 单个checkbox组件
 */
class CheckBox extends React.Component {
  static propTypes = {
    checkedDatas: types.chooseDatas,
    info: types.singleData,
  };

  changeHandler = (e) => {
    let newArr;
    if (e.target.checked) {
      newArr = [...this.props.checkedDatas, e.target.value];
    } else {
      newArr = this.props.checkedDatas.filter((it) => it !== e.target.value);
    }
    this.props.onChange && this.props.onChange(newArr);
  };

  render() {
    return (
      <label>
        <input
          type="checkbox"
          name={this.props.name}
          checked={this.props.checkedDatas.includes(this.props.info.value)}
          value={this.props.info.value}
          onChange={this.changeHandler}
        />
        {this.props.info.text}
      </label>
    );
  }
}
export default withDataGroup(CheckBox);