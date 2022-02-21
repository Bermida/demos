import React, { Component } from "react";
import Modal from ".//Modal";

export default class Test extends Component {
  state = {
    isModal: false,
  };

  modalOpen = () => {
    this.setState({
      isModal: true,
    });
  };
  modalClose = () => {
    this.setState({
      isModal: false,
    });
  };

  render() {
    return (
      <div>
          <button onClick={this.modalOpen}>打开Modal</button>
        {this.state.isModal ? (
          <Modal bg="rgba(255,0,0,0.3)" onClose={this.modalClose}>
            <h1>Modal中间区域的内容</h1>
          </Modal>
        ) : null}
      </div>
    );
  }
}
