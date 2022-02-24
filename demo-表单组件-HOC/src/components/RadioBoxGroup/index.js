import React from "react";
import types from "../../utils/commonTypes";
import withDataGroup from "../HOC/withDataGroup";

class RadioBox extends React.Component {
  static propTypes = {
    info: types.singleData,
  };

  handlerChange = (e) => {
    const newData = e.target.value;
    this.props.onChange && this.props.onChange(newData);
  };

  render() {
    return (
      <label>
        <input
          type="radio"
          name={this.props.name}
          value={this.props.info.value}
          checked={this.props.checkedData === this.props.info.value}
          onChange={this.handlerChange}
        />
        {this.props.info.text}
      </label>
    );
  }
}

export default withDataGroup(RadioBox);
