import React, { useEffect } from 'react';
import AttachmentTable from '../AttachmentTable/AttachmentTable';
import Uploads from '../../../assests/upload.svg';
import DashboardTitle from '../../common/DashboardTitle';
import { Row, Col } from 'react-bootstrap';
import Input from '../../common/Input';
import Select from '../../common/Select';
import {
  GET_PROJECT_NAME,
  GET_PROJECT_TYPE,
  GET_PROJECT_DOMAIN,
  GET_CURRENCY,
  GET_PROJECT_STATUS,
} from '../../../api/APIEndpoints';

import SaveAndContinue from '../../common/SaveAndContinue';
import { useState } from 'react';
import { sweetAlertComponent } from '../../common/Alert';

import axios from 'axios';

const GeneralInformation = () => {
  const [projectName, setProjectName] = useState([]);
  const [projectType, setProjectType] = useState([]);
  const [projectDomain, setProjectDomain] = useState([]);
  const [currency, setCurrency] = useState([]);
  const [projectStatus, setProjectStatus] = useState([]);
  const [loading, setLoading] = useState(true);

  const [projectNameValue, setProjectNameValue] = useState('');
  const [projectTypeValue, setProjectTypeValue] = useState('');
  const [projectDomainValue, setProjectDomainValue] = useState('');
  const [currencyValue, setCurrencyValue] = useState('');
  const [projectStatusValue, setProjectStatusValue] = useState('');
  const [estimatedEfforts, setEstimatedEfforts] = useState('');

  useEffect(() => {
    GET_PROJECT_NAME()
      .then((res) => {
        setLoading(true);
        setProjectName(res?.data?.data);
        setLoading(false);
      })
      .catch((err) => {
        sweetAlertComponent('error', 'something went wrong');
      });

    GET_PROJECT_TYPE()
      .then((res) => {
        setLoading(true);
        setProjectType(res?.data?.data);
        setLoading(false);
      })
      .catch((err) => {
        sweetAlertComponent('error', 'something went wrong');
      });

    GET_PROJECT_DOMAIN()
      .then((res) => {
        setLoading(true);
        setProjectDomain(res?.data?.data);
        setLoading(false);
      })
      .catch((err) => {
        sweetAlertComponent('error', 'something went wrong');
      });

    GET_CURRENCY()
      .then((res) => {
        setLoading(true);
        setCurrency(res?.data?.data);
        setLoading(false);
      })
      .catch((err) => {
        sweetAlertComponent('error', 'something went wrong');
      });

    GET_PROJECT_STATUS()
      .then((res) => {
        setLoading(true);
        setProjectStatus(res?.data?.data);
        setLoading(false);
      })
      .catch((err) => {
        sweetAlertComponent('error', 'something went wrong');
      });

    axios
      .get('https://graph.microsoft.com/v1.0/users', {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {loading && <div className="loading"></div>}
      <DashboardTitle title={'General Information'} />
      <div className="container mt-3">
        <Row>
          <Col lg={2} style={{ width: '8rem' }}>
            Project Name
          </Col>

          <Col lg={4}>
            <Select option={projectName} setSelectedValue={setProjectNameValue} />
          </Col>

          <Col lg={2} style={{ width: '8rem' }}>
            Project Type
          </Col>

          <Col lg={4}>
            <Select option={projectType} setSelectedValue={setProjectTypeValue} />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} style={{ width: '8rem' }}>
            Project Domain
          </Col>

          <Col lg={4}>
            <Select option={projectDomain} setSelectedValue={setProjectDomainValue} />
          </Col>

          <Col lg={2} style={{ width: '8rem' }}>
            Estimated Efforts
          </Col>

          <Col
            lg={4}
            style={{
              justifyContent: 'flex-start',
              display: 'flex',
            }}
          >
            <input type="text" style={{ width: '12rem', height: '1.9rem' }} />
            <Select
              option={[
                { name: 'Minutes', value: 'minutes' },
                { name: 'Hour', value: 'hours' },
                { name: 'Days', value: 'days' },
                { name: 'Months', value: 'months' },
                { name: 'Years', value: 'years' },
              ]}
              setSelectedValue={setEstimatedEfforts}
            />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} style={{ width: '8rem' }}>
            Description
          </Col>

          <Col lg={4}>
            <textarea className="generalInformation-textArea" style={{ width: '100%' }}></textarea>
          </Col>

          <Col lg={2} style={{ width: '8rem' }}>
            Currency
          </Col>

          <Col
            lg={4}
            style={{
              justifyContent: 'flex-start',
              display: 'flex',
            }}
          >
            <Select option={currency} setSelectedValue={setCurrencyValue} />
            <input type="text" style={{ width: '12rem', height: '1.9rem' }} />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} style={{ width: '8rem' }}>
            Project Status
          </Col>

          <Col lg={4}>
            <Select option={projectStatus} setSelectedValue={setProjectStatusValue} />
          </Col>

          <Col lg={2} style={{ width: '8rem' }}>
            In house
          </Col>

          <Col lg={4}>
            <div className="d-flex gap-5">
              <div className="d-flex gap-2">
                <input type="radio" name="1" value={true} onChange={(e) => alert(e.target.value)} />
                <span className="ml-4">Yes</span>
              </div>
              <div className="d-flex gap-2">
                <input type="radio" name="1" value={false} onChange={(e) => alert(e.target.value)} />
                <span className="ml-4">No</span>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} style={{ width: '8rem' }}>
            Attachments
          </Col>

          <Col lg={4}>
            <div className="d-flex gap-3 upload-image">
              <div>Upload Docx</div>
              <div className="">
                <img src={Uploads} alt="images" />
              </div>
            </div>
          </Col>

          <Col lg={2} style={{ width: '8rem' }}>
            Billing visible to managers
          </Col>

          <Col lg={4}>
            <div className="d-flex gap-5">
              <div className="d-flex gap-2">
                <input type="radio" name="2" value={true} onChange={(e) => alert(e.target.value)} />
                <span className="ml-4">Yes</span>
              </div>
              <div className="d-flex gap-2">
                <input type="radio" name="2" value={false} onChange={(e) => alert(e.target.value)} />
                <span className="ml-4">No</span>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <AttachmentTable />
          </Col>
        </Row>
        <Row>
          <Col xs={3} style={{ width: '13rem' }}>
            Attachment (For Manager)
          </Col>

          <Col xs={6}>
            <div className="d-flex gap-3 upload-image">
              <div>Upload Docx</div>
              <div className="">
                <img src={Uploads} alt="images" />
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <AttachmentTable />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} style={{ width: '8rem' }}>
            Planned Start Date
          </Col>

          <Col lg={4}>
            <input type="date" style={{ width: '100%' }} />
          </Col>

          <Col lg={2} style={{ width: '8rem' }}>
            Planned End Date
          </Col>

          <Col lg={4}>
            <input type="date" style={{ width: '100%' }} />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={2} style={{ width: '8rem' }}>
            <div className="d-flex ">
              <div>Actual Start Date</div>
              <div>
                <input type={'checkbox'} />
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <input type="date" style={{ width: '100%' }} />
          </Col>

          <Col lg={2} style={{ width: '8rem' }}>
            <div className="d-flex ">
              <div>Actual End Date</div>
              <div>
                <input type={'checkbox'} />
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <input type="date" style={{ width: '100%' }} />
          </Col>
        </Row>

        <Row className="mt-4 pb-4">
          <Col lg={2} style={{ width: '8rem' }}>
            Reason If any Delay in Start Date
          </Col>

          <Col lg={4}>
            <textarea className="generalInformation-textArea" style={{ width: '100%' }}></textarea>
          </Col>

          <Col lg={2} style={{ width: '8rem' }}>
            Reason If any Delay in End Date
          </Col>

          <Col lg={4}>
            <textarea className="generalInformation-textArea" style={{ width: '100%' }}></textarea>
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

export default GeneralInformation;
