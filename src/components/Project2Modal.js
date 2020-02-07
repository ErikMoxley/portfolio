import React, { Component } from "react";
import { Modal } from "antd";
import { Button } from "reactstrap";
import "../styles/Modal.css";

export default class ProjModal2 extends Component {
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
          title="Lanxang Made With ReactJS"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>
          ]}
        >
          <div class="project2">
            <h4>Made With:</h4>
            <li>ReactJS</li>
            <li>HTML/CSS/Javacript</li>
            <li>Styled Components</li>
            <li>Bootstrap</li>
            <li>NPM's such as react-router-dom and react-reveal</li>
            <p>
              - (Work in Progress) Lanxang is a website built from scratch using
              ReactJS. Based on one of my favorite local restaurants in Dracut,
              MA. Header and footer were inspired by other top restaurant
              websites. Deployed through Netlify via Github Pages. Shopping cart
              for online ordering interface coming soon.
            </p>
          </div>
        </Modal>
      </div>
    );
  }
}
