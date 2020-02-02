import React, { Component } from "react";
import { Modal } from "antd";
import { Button } from "reactstrap";
import "../styles/Modal.css";

export default class ProjModal1 extends Component {
  state = {
    loading: false,
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    return (
      <div className="projectButton">
        <Button
          className="ProjModalButton"
          type="primary"
          onClick={this.showModal}
        >
          Made With
        </Button>
        <Modal
          visible={visible}
          title="Portfolio Made With ReactJS"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>
          ]}
        >
          <div class="project1">
            <h4>Made With:</h4>
            <li>ReactJS</li>
            <li>HTML/CSS/Javacript</li>
            <li>Bootstrap</li>
            <p>Testing Testing Testing</p>
          </div>
        </Modal>
      </div>
    );
  }
}
