import React from 'react';

import DashboardTitle from '../../common/DashboardTitle';
import { Row, Col } from 'react-bootstrap';
import Input from '../../common/Input';
import Select from '../../common/Select';
import SaveAndContinue from '../../common/SaveAndContinue';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { ADD_CLIENT_DETAIL } from '../../../api/APIEndpoints';

const ClientDetails = () => {
  return (
    <div>
      <DashboardTitle title={'Client Details'} />
      <div className="container mt-3">
        <Row>
          <Col lg={2} className="client-col">
            Client Name
          </Col>

          <Col lg={4}>
            <Input type={'text'} className={'client-input'} />
          </Col>

          <Col lg={2} className="client-col">
            Phone Number
          </Col>

          <Col lg={4}>
            <div className="d-flex">
              <div style={{ flexGrow: '1' }}>
                <PhoneInput inputClass="country-code" containerStyle={{ width: '3px' }} enableSearch country={'in'} />
              </div>
              <div style={{ flexGrow: '11' }}>
                <Input type={'text'} />
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} className="client-col">
            Address
          </Col>

          <Col lg={4}>
            <Input type={'text'} className={'client-input'} />
          </Col>

          <Col lg={2} className="client-col">
            Email Id
          </Col>

          <Col lg={4}>
            <Input type={'email'} className={'client-input'} />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} className="client-col">
            Communication Mode
          </Col>

          <Col lg={4}>
            <Input type={'text'} className={'client-input'} />
          </Col>
        </Row>

        <div className="client-ruler"></div>

        <Row className="mt-4">
          <Col lg={2} className="client-col">
            Contact Person Name
          </Col>

          <Col lg={4}>
            <Input type={'text'} className={'client-input'} />
          </Col>

          <Col lg={2} className="client-col">
            Email Id
          </Col>

          <Col lg={4}>
            <Input type={'email'} className={'client-input'} />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} className="client-col">
            Phone Number
          </Col>

          <Col lg={4}>
            <Input type={'text'} className={'client-input'} />
          </Col>
        </Row>

        <Row>
          <Col>
            <SaveAndContinue />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ClientDetails;
