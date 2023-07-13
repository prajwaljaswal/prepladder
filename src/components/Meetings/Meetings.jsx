import React from "react";
import DashboardTitle from "../common/DashboardTitle/DashboardTitle";
import { Row, Col } from "react-bootstrap";
import Input from "../common/Input/Input";
import SaveAndContinue from "../common/SaveAndContinue/SaveAndContinue";

const Meetings = () => {
  return (
    <div>
      <DashboardTitle title={"Meeting"} />
      <div className="container mt-3">
        <Row className="mt-4">
          <Col lg={2} className="meeting-col">
            External Kick Off
          </Col>

          <Col lg={4}>
            <Input type="date" className={"meeting-input"} />
          </Col>

          <Col lg={2} className="meeting-col">
            Internal Kick Off
          </Col>

          <Col lg={4}>
            <Input type="date" className={"meeting-input"} />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} className="meeting-col">
            Planned UAT
          </Col>

          <Col lg={4}>
            <Input type="date" className={"meeting-input"} />
          </Col>

          <Col lg={2} className="meeting-col">
            Planned Live
          </Col>

          <Col lg={4}>
            <Input type="date" className={"meeting-input"} />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} className="meeting-col">
          <div className="d-flex gap-2">
          <div>Actual UAT</div>
          <div><Input type={"checkbox"}/></div>
        </div>
          </Col>

          <Col lg={4}>
            <Input type="date" className={"meeting-input"} />
          </Col>

          <Col lg={2} className="meeting-col">
          <div className="d-flex gap-2">
          <div>Actual Live</div>
          <div><Input type={"checkbox"}/></div>
        </div>
          </Col>

          <Col lg={4}>
            <Input type="date" className={"meeting-input"} />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} className="meeting-col">
            Reason If any Delay in UAT
          </Col>

          <Col lg={4}>
            <textarea className="meeting-textArea"></textarea>
          </Col>

          <Col lg={2} className="meeting-col">
            Reason If any Delay in Live
          </Col>

          <Col lg={4}>
            <textarea className="meeting-textArea"></textarea>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <SaveAndContinue />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Meetings;
