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
                <p>
                  Sales, Profitability, Asset Protection, Training & development
                  of all team members. Customer/Patient Experience. Compliance
                  with State and Employment Laws/Regulations. Scheduling
                  (Workforce), Hiring, Promotion and Termination Decisions,
                  Payroll (Kronos) Management. Managed ~20 team members
                  (Pharmacy Manager, ASMs and SFLs. Developed employee
                  performance plans w/ deadlines.
                </p>
              </div>
            </div>

            <div class="timeline-block timeline-block-left">
              <div class="marker"></div>
              <div class="timeline-content">
                <h3>Assistant Store Manager</h3>
                <h6>2015-2018</h6>
                <p>
                  Managed ~10-15 team members DHs, CSAs. Communication of
                  corporate initiatives in one on ones or group meetings daily.
                  Store Inventory Management, supervised all control of store
                  money. Participated in company and on-the-job training to
                  improve skills and productivity and attends training requested
                  by District Management and corporate. Completed Drug Store
                  Management training program during specified timeframe(May
                  2016.)
                </p>
              </div>
            </div>

            <div class="timeline-block timeline-block-right">
              <div class="marker"></div>
              <div class="timeline-content">
                <h3>Shift Leader</h3>
                <h6>2014-2015</h6>
                <p>
                  Opened and closed stores, systems start-ups, cash handling,
                  floor/stockroom cleanliness. Ensured staff trained in all
                  computer,tech systems and software (e.g. Nextgen registers,
                  StoreNet, Intercom+, etc.) Ensured response to all systems
                  problems.
                </p>
              </div>
            </div>

            <div class="timeline-block timeline-block-left">
              <div class="marker"></div>
              <div class="timeline-content">
                <h3>CSA</h3>
                <h6>2007-2014</h6>
                <p>
                  Modeled and delivered a distinctive and delightful customer
                  experience. Performed basic store operations ranging from cash
                  handling, working stock, resets/revisions, using tools,
                  applications, and devices to assist and meet all customers
                  needs.
                </p>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
