import React from 'react';

import { Row, Col } from 'react-bootstrap';

import Select from '../common/Select/Select';
import Input from '../common/Input/Input';

import DashboardTitle from '../common/DashboardTitle/DashboardTitle';
import MonthlyBillableHoursTable from './MonthlyBillableHoursTable';
import SaveAndContinue from '../common/SaveAndContinue/SaveAndContinue';
const MonthlyBillableHours = () => {
  return (
    <div>
      <DashboardTitle title={'Monthly Billable Hours'} />
      <div className="container mt-3">
        <Row>
          <Col className="d-flex justify-content-end">
            <div className="btn btn-primary">Add New</div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} style={{ width: '3rem' }}>
            Year
          </Col>

          <Col lg={3}>
            <Select option={['Direct Bullion', 'CSM capgemini', 'Chef', 'Tmotion', 'Honkong']} />
          </Col>

          <Col lg={2} style={{ width: '4rem' }}>
            Month
          </Col>

          <Col lg={3}>
            <Select option={['Direct Bullion', 'CSM capgemini', 'Chef', 'Tmotion', 'Honkong']} />
          </Col>

          <Col lg={2} style={{ width: '3rem' }}>
            Hour
          </Col>

          <Col lg={3}>
            <Input type={'text'} className={'billingHours-input'} />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="d-flex justify-content-end">
            <div className="btn btn-primary">Save</div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <MonthlyBillableHoursTable />
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

export default MonthlyBillableHours;
