import React, { Component } from "react";
import { Modal } from "antd";
import { Button } from "reactstrap";
import "../styles/Modal.css";

export default class WorkModal extends Component {
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
      <div>
        <Button className="modalButton" type="primary" onClick={this.showModal}>
          History
        </Button>
        <Modal
          visible={visible}
          title="Work History"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>
          ]}
        >
          <div class="exp-container">
            <div class="timeline-block timeline-block-left">
              <div class="timeline-content work-name">
                <h3>Walgreens Boots Alliance</h3>
                <h6>2007-2019</h6>
              </div>
            </div>
            <div class="timeline-block timeline-block-right">
              <div class="marker"></div>
              <div class="timeline-content">
                <h3>Store Manager</h3>
                <h6>2018-2019</h6>
                <p></p>
              </div>
            </div>

            <div class="timeline-block timeline-block-left">
              <div class="marker"></div>
              <div class="timeline-content">
                <h3>Assistant Store Manager</h3>
                <h6>2015-2018</h6>
                <p></p>
              </div>
            </div>

            <div class="timeline-block timeline-block-right">
              <div class="marker"></div>
              <div class="timeline-content">
                <h3>Shift Leader</h3>
                <h6>2014-2015</h6>
                <p></p>
              </div>
            </div>

            <div class="timeline-block timeline-block-left">
              <div class="marker"></div>
              <div class="timeline-content">
                <h3>CSA</h3>
                <h6>2007-2014</h6>
                <p></p>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
