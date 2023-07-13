import React from "react";
import { Row, Col } from "react-bootstrap";
import DashboardTitle from "../common/DashboardTitle/DashboardTitle";
import Input from "../common/Input/Input";
import Select from "../common/Select/Select";
import Uploads from "../../assests/upload.svg";
import SaveAndContinue from "../common/SaveAndContinue/SaveAndContinue";
const ChangeRequest = () => {
  return (
    <div>
      <DashboardTitle title={"Change Request"} />
      <div className="container mt-3">
        <Row>
          <Col className="d-flex justify-content-end">
            <div className="btn btn-primary">Add CR</div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} className="change-request-col">
            CR Name
          </Col>

          <Col lg={4}>
            <Input type={"text"} className={"change-request-input"} />
          </Col>

          <Col lg={2} className="change-request-col">
            Estimated Efforts
          </Col>

          <Col
            lg={4}
            className="d-flex flex-start" >
            <Input type="text" />
            <Select option={["Minutes", "Hour", "Days", "Months", "Years"]} />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} className="change-request-col">
            Planned Start Date
          </Col>

          <Col lg={4}>
            <Input type={"date"} className={"change-request-input"} />
          </Col>

          <Col lg={2}className="change-request-col">
            Planned End Date
          </Col>

          <Col lg={4}>
            <Input type={"date"} className={"change-request-input"} />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} className="meeting-col">
            <div className="d-flex gap-1">
              <div>Actual UAT</div>
              <div>
                {" "}
                <Input type="checkbox" className={"change-request-input"} />
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <Input type="date" className={"change-request-input"} />
          </Col>
          <Col lg={2} className="meeting-col">
            <div className="d-flex gap-1">
              <div>Actual Live</div>
              <div>
                {" "}
                <Input type="checkbox" className={"change-request-input"} />
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <Input type={"date"} className={"change-request-input"} />
          </Col>
        </Row>

        <Row className="mt-4 pb-4">
          <Col lg={2} className="change-request-col">
            Reason If any Delay in Start Date
          </Col>

          <Col lg={4} >
            <textarea className="change-request-textarea" ></textarea>
          </Col>

          <Col lg={2} className="change-request-col">
            Reason If any Delay in End Date
          </Col>

          <Col lg={4}>
            <textarea className="change-request-textarea"></textarea>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col lg={2} className="change-request-col">
            Attachment
          </Col>

          <Col lg={4} >
            <div className="d-flex justify-content-center gap-3 upload-image">
              <div>Upload Docx</div>
              <div className="">
                <img src={Uploads} alt="images" />
              </div>
            </div>
          </Col>

          <Col lg={2} className="change-request-col">
            Cost
          </Col>

          <Col lg={4}>
            <Input type={"text"} className={"change-request-input"} />
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

export default ChangeRequest;
