import React from 'react';
import DashboardTitle from '../../common/DashboardTitle';
import { Row, Col } from 'react-bootstrap';
import Input from '../../common/Input';
import SaveAndContinue from '../../common/SaveAndContinue';

const OtherInfo = () => {
  return (
    <div>
      <DashboardTitle title={'Other Info'} />

      <div className="mt-3 container">
        <Row>
          <Col md={2} className="change-request-col">
            Total Hours
          </Col>

          <Col md={4}>
            <Input type="text" />
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

export default OtherInfo;
