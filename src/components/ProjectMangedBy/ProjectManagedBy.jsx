import React from 'react';
import DashboardTitle from '../common/DashboardTitle/DashboardTitle';
import { Row, Col } from 'react-bootstrap';
import Input from '../common/Input/Input';
import Select from '../common/Select/Select';
import SaveAndContinue from '../common/SaveAndContinue/SaveAndContinue';

const ProjectManagedBy = () => {
  return (
    <div>
      <DashboardTitle title={'Project Manged By'} />
      <div className="container mt-3">
        <Row>
          <Col lg={2} className="projectMangedBy-col">
            Project Manager Name
          </Col>

          <Col lg={4}>
            <Select option={['Jashween', 'Chamanpreet', 'Ashish Kaushik']} className={'projectMangedBy-input'} />
          </Col>

          <Col lg={2} className="client-col">
            Email ID
          </Col>

          <Col lg={4}>
            <Input type={'email'} className={'projectMangedBy-input'} />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} className="projectMangedBy-col">
            Phone Number
          </Col>

          <Col lg={4}>
            <Input type={'email'} className={'projectMangedBy-input'} />
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

export default ProjectManagedBy;
