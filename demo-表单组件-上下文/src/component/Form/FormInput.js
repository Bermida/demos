import React, { Component } from 'react'
import propTypes from "prop-types"
import ctx from "./formContext"

export default class FormInput extends Component {
    static contextType = ctx;
    static propTypes = {
        type: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
    }
    static defaultProps = {
        type: 'text',
    }
  render() {
    return (
      <input 
      type={this.props.type} 
      name={this.props.name}
      value={this.context.formData[this.props.name] || ""}
      onChange={(e)=>{
          this.context.contextChange && this.context.contextChange(this.props.name, e.target.value)
      }}/>
    )
  }
}
