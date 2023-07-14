import React from 'react';

import DashboardTitle from '../../common/DashboardTitle';
import { Row, Col } from 'react-bootstrap';
import Input from '../../common/Input';
import Select from '../../common/Select';

import SaveAndContinue from '../../common/SaveAndContinue';

const ProjectResource = () => {
  return (
    <div>
      <DashboardTitle title={'Project Resource'} />
      <div className="mt-3 container">
        <Row>
          <Col sm={2}>Required Resources</Col>

          <Col sm={3}>
            <div>
              <Input type={'text'} />
            </div>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <div className="d-flex justify-content-between">
              <div className="resource-core">Core Resources</div>
              <div className="btn btn-primary">Add New</div>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} className="resource-col">
            Project Name
          </Col>

          <Col lg={4}>
            <Select option={['Direct Bullion', 'CSM capgemini', 'Chef', 'Tmotion', 'Honkong']} />
          </Col>

          <Col lg={2} className="resource-col">
            Project Type
          </Col>

          <Col lg={4}>
            <Select option={['Direct Bullion', 'CSM capgemini', 'Chef', 'Tmotion', 'Honkong']} />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} className="resource-col">
            Project Name
          </Col>

          <Col lg={4}>
            <Select option={['Direct Bullion', 'CSM capgemini', 'Chef', 'Tmotion', 'Honkong']} />
          </Col>

          <Col lg={2} className="resource-col">
            Project Type
          </Col>

          <Col lg={4}>
            <Select option={['Direct Bullion', 'CSM capgemini', 'Chef', 'Tmotion', 'Honkong']} />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} className="resource-col">
            Project Name
          </Col>

          <Col lg={4}>
            <Select option={['Direct Bullion', 'CSM capgemini', 'Chef', 'Tmotion', 'Honkong']} />
          </Col>

          <Col lg={2} className="resource-col">
            Project Type
          </Col>

          <Col lg={4}>
            <Select option={['Direct Bullion', 'CSM capgemini', 'Chef', 'Tmotion', 'Honkong']} />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} className="resource-col">
            Project Name
          </Col>

          <Col lg={4}>
            <Select option={['Direct Bullion', 'CSM capgemini', 'Chef', 'Tmotion', 'Honkong']} />
          </Col>

          <Col lg={2} className="resource-col">
            Project Type
          </Col>

          <Col lg={4}>
            <Select option={['Direct Bullion', 'CSM capgemini', 'Chef', 'Tmotion', 'Honkong']} />
          </Col>
        </Row>

        <Row className="mt-4 resource-box">
          <Col>
            <div className="d-flex justify-content-between">
              <div>Total Resources</div>
              <div>4 Resources</div>
            </div>
          </Col>
        </Row>

        <div className="resource-ruler"></div>

        <Row className="mt-3">
          <Col>
            <div className="d-flex justify-content-between">
              <div className="resource-core">Shadow Resources</div>
              <div className="btn btn-primary">Add New</div>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} className="resource-col">
            Project Name
          </Col>

          <Col lg={4}>
            <Select option={['Direct Bullion', 'CSM capgemini', 'Chef', 'Tmotion', 'Honkong']} />
          </Col>

          <Col lg={2} className="resource-col">
            Project Type
          </Col>

          <Col lg={4}>
            <Select option={['Direct Bullion', 'CSM capgemini', 'Chef', 'Tmotion', 'Honkong']} />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} className="resource-col">
            Project Name
          </Col>

          <Col lg={4}>
            <Select option={['Direct Bullion', 'CSM capgemini', 'Chef', 'Tmotion', 'Honkong']} />
          </Col>

          <Col lg={2} className="resource-col">
            Project Type
          </Col>

          <Col lg={4}>
            <Select option={['Direct Bullion', 'CSM capgemini', 'Chef', 'Tmotion', 'Honkong']} />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} className="resource-col">
            Project Name
          </Col>

          <Col lg={4}>
            <Select option={['Direct Bullion', 'CSM capgemini', 'Chef', 'Tmotion', 'Honkong']} />
          </Col>

          <Col lg={2} className="resource-col">
            Project Type
          </Col>

          <Col lg={4}>
            <Select option={['Direct Bullion', 'CSM capgemini', 'Chef', 'Tmotion', 'Honkong']} />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} className="resource-col">
            Project Name
          </Col>

          <Col lg={4}>
            <Select option={['Direct Bullion', 'CSM capgemini', 'Chef', 'Tmotion', 'Honkong']} />
          </Col>

          <Col lg={2} className="resource-col">
            Project Type
          </Col>

          <Col lg={4}>
            <Select option={['Direct Bullion', 'CSM capgemini', 'Chef', 'Tmotion', 'Honkong']} />
          </Col>
        </Row>

        <Row className="mt-4 resource-box">
          <Col>
            <div className="d-flex justify-content-between">
              <div>Total Resources</div>
              <div>4 Resources</div>
            </div>
          </Col>
        </Row>

        <div className="resource-ruler"></div>

        <Row className="mt-3">
          <Col>
            <div className="d-flex justify-content-between">
              <div className="resource-core">Support Resources</div>
              <div className="btn btn-primary">Add New</div>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} className="resource-col">
            Project Name
          </Col>

          <Col lg={4}>
            <Select option={['Direct Bullion', 'CSM capgemini', 'Chef', 'Tmotion', 'Honkong']} />
          </Col>

          <Col lg={2} className="resource-col">
            Project Type
          </Col>

          <Col lg={4}>
            <Select option={['Direct Bullion', 'CSM capgemini', 'Chef', 'Tmotion', 'Honkong']} />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} className="resource-col">
            Project Name
          </Col>

          <Col lg={4}>
            <Select option={['Direct Bullion', 'CSM capgemini', 'Chef', 'Tmotion', 'Honkong']} />
          </Col>

          <Col lg={2} className="resource-col">
            Project Type
          </Col>

          <Col lg={4}>
            <Select option={['Direct Bullion', 'CSM capgemini', 'Chef', 'Tmotion', 'Honkong']} />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} className="resource-col">
            Project Name
          </Col>

          <Col lg={4}>
            <Select option={['Direct Bullion', 'CSM capgemini', 'Chef', 'Tmotion', 'Honkong']} />
          </Col>

          <Col lg={2} className="resource-col">
            Project Type
          </Col>

          <Col lg={4}>
            <Select option={['Direct Bullion', 'CSM capgemini', 'Chef', 'Tmotion', 'Honkong']} />
          </Col>
        </Row>

        <Row className="mt-4 resource-box">
          <Col>
            <div className="d-flex justify-content-between">
              <div>Total Resources</div>
              <div>4 Resources</div>
            </div>
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

export default ProjectResource;
