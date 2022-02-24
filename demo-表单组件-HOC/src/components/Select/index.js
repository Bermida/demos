import React from "react";
import types from "../../utils/commonTypes";
import withDataGroup from "../HOC/withDataGroup";
import PropTypes from "prop-types";

class Option extends React.Component {
  render() {
    return (
      <option value={this.props.info.value}>{this.props.info.text}</option>
    );
  }
}

const OptGroup = withDataGroup(Option);

export default class Select extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: types.changeEvent,
  };

  handlerChange = (e) => {
    const newVal = e.target.value;
    this.props.onChange && this.props.onChange(newVal);
  };

  render() {
    return (
      <select name={this.props.name} onChange={this.handlerChange}>
        <OptGroup {...this.props} />
      </select>
    );
  }
}
