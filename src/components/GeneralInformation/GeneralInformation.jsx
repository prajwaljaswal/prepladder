import React from "react";
import DashboardTitle from "../common/DashboardTitle/DashboardTitle";

import { Row, Col } from "react-bootstrap";
import Select from "../common/Select/Select";

import AttachmentTable from "../AttachmentTable/AttachmentTable";
import Uploads from "../../assests/upload.svg";
import SaveAndContinue from "../common/SaveAndContinue/SaveAndContinue";
import Input from "../common/Input/Input";


const GeneralInformation = () => {
  return (
    <div>
      <DashboardTitle title={"General Information"} />
      <div className="container mt-3">
        <Row>
          <Col lg={2} style={{ width: "8rem" }}>
            Project Name
          </Col>

          <Col lg={4} >
            <Select
              option={[
                "Direct Bullion",
                "CSM capgemini",
                "Chef",
                "Tmotion",
                "Honkong",
              ]}
            />
          </Col>

          <Col lg={2} style={{ width: "8rem" }}>
            Project Type
          </Col>

          <Col lg={4} >
            <Select
              option={[
                "Direct Bullion",
                "CSM capgemini",
                "Chef",
                "Tmotion",
                "Honkong",
              ]}
            />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} style={{ width: "8rem" }}>
            Project Domain
          </Col>

          <Col lg={4} >
            <Select
              option={[
                "Direct Bullion",
                "CSM capgemini",
                "Chef",
                "Tmotion",
                "Honkong",
              ]}
            />
          </Col>

          <Col lg={2} style={{ width: "8rem" }}>
            Estimated Efforts
          </Col>

          <Col
            lg={4}
            style={{
              justifyContent: "flex-start",
              display: "flex",
             
            }}
          >
            <Input type="text" />
            <Select option={["Minutes", "Hour", "Days", "Months", "Years"]} />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} style={{ width: "8rem" }}>
            Description
          </Col>

          <Col lg={4} >
            <textarea className="generalInformation-textArea" style={{width:"100%"}}></textarea>
          </Col>

          <Col lg={2} style={{ width: "8rem" }}>
            Currency
          </Col>

          <Col
            lg={4}
            style={{
              justifyContent: "flex-start",
              display: "flex",
              
            }}
          >
            <Select option={["Pounds" , "Dollar" ,"EUR" ,"INR"]} />
            <Input type="text" style={{ width: "12rem", height: "1.41rem" }} />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} style={{ width: "8rem" }}>
            Project Status
          </Col>

          <Col lg={4} >
            <Select
              option={[
                "Direct Bullion",
                "CSM capgemini",
                "Chef",
                "Tmotion",
                "Honkong",
              ]}
            />
          </Col>

          <Col lg={2} style={{ width: "8rem" }}>
            In house
          </Col>

          <Col lg={4} >
            <div className="d-flex gap-5">
              <div className="d-flex gap-2" >
                <input type="radio" name="1" />
                <span className="ml-4">Yes</span>
              </div>
              <div className="d-flex gap-2">
                <input type="radio" name="1" />
                <span className="ml-4">No</span>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} style={{ width: "8rem" }}>
            Attachments
          </Col>

          <Col lg={4} >
          <div className="d-flex gap-3 upload-image">
            <div>Upload Docx</div>
            <div className=""><img src={Uploads} alt="images"/></div>
            </div>
          </Col>

          <Col lg={2} style={{ width: "8rem" }}>
            Billing visible to managers
          </Col>

          <Col lg={4}>
            <div className="d-flex gap-5">
              <div className="d-flex gap-2">
                <input type="radio" name="2" />
                <span className="ml-4">Yes</span>
              </div>
              <div className="d-flex gap-2">
                <input type="radio" name="2" />
                <span className="ml-4">No</span>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
          <AttachmentTable/>
          </Col>
        </Row>
        <Row>
          <Col xs={3} style={{width:"13rem"}}>
          Attachment (For Manager)
          </Col>

          <Col xs={6}>
          <div className="d-flex gap-3 upload-image">
            <div>Upload Docx</div>
            <div className=""><img src={Uploads} alt="images"/></div>
            </div>
          </Col>
        </Row>

       
        <Row>
          <Col>
          <AttachmentTable/>
          </Col>
        </Row>
         

        <Row className="mt-4">
          <Col lg={2} style={{ width: "8rem" }}>
           Planned Start Date
          </Col>

          <Col lg={4} >
           <input type="date" style={{width:"100%"}}/>
          </Col>

          <Col lg={2} style={{ width: "8rem" }}>
            Planned End Date
          </Col>

          <Col lg={4} >
           <input type="date" style={{width:"100%"}}/>
          </Col>
        </Row>


        
        <Row className="mt-4">
          <Col lg={2} style={{ width: "8rem" }}>
           <div className="d-flex ">
            <div>Actual Start Date</div>
            <div><Input type={"checkbox"}/></div>
           </div>
          </Col>

          <Col lg={4}>
           <input type="date" style={{width:"100%"}}/>
          </Col>

          <Col lg={2} style={{ width: "8rem" }}>
          <div className="d-flex ">
            <div>Actual End Date</div>
            <div><Input type={"checkbox"}/></div>
           </div>
          </Col>

          <Col lg={4}>
           <input type="date" style={{width:"100%"}}/>
          </Col>
        </Row>


        <Row className="mt-4 pb-4">
          <Col lg={2} style={{ width: "8rem" }}>
            Reason If any Delay in Start Date
          </Col>

          <Col lg={4}>
          <textarea className="generalInformation-textArea" style={{width:"100%"}}></textarea>
          </Col>

          <Col lg={2} style={{ width: "8rem" }}>
           Reason If any Delay in End Date
          </Col>

          <Col lg={4} >
          <textarea className="generalInformation-textArea" style={{width:"100%"}}></textarea>
          </Col>
        </Row>

        <Row>
          <Col>
          <SaveAndContinue/>
          </Col>
        </Row>

      </div>
    </div>
  );
};

export default GeneralInformation;
