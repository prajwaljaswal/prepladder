import React, { useEffect } from 'react';
import AttachmentTable from '../AttachmentTable/AttachmentTable';
import Uploads from '../../../assests/upload.svg';
import DashboardTitle from '../../common/DashboardTitle';
import { Row, Col } from 'react-bootstrap';
import Select from '../../common/Select';
import {
  GET_PROJECT_NAME,
  GET_PROJECT_TYPE,
  GET_PROJECT_DOMAIN,
  GET_CURRENCY,
  GET_PROJECT_STATUS,
  ADD_GENERAL_INFO,
} from '../../../api/APIEndpoints';

import SaveAndContinue from '../../common/SaveAndContinue';
import { useState } from 'react';
import { sweetAlertComponent } from '../../common/Alert';
import { useForm } from 'react-hook-form';

const GeneralInformation = () => {
  const [projectName, setProjectName] = useState([]);
  const [projectType, setProjectType] = useState([]);
  const [projectDomain, setProjectDomain] = useState([]);
  const [currency, setCurrency] = useState([]);
  const [projectStatus, setProjectStatus] = useState([]);
  const [loading, setLoading] = useState(true);

  const [projectNameValue, setProjectNameValue] = useState(null);
  const [projectTypeValue, setProjectTypeValue] = useState(null);
  const [projectDomainValue, setProjectDomainValue] = useState(null);
  const [CurrencyId, setCurrencyId] = useState(null);
  const [projectStatusValue, setProjectStatusValue] = useState(null);
  const [estimatedEfforts, setEstimatedEfforts] = useState(5);
  const [inHouse, setInhouse] = useState(false);
  const [visibleToManager, setvisibleToManager] = useState(false);
  const [image, setImage] = useState([]);
  const [managerImage, setManagerImage] = useState([]);
  const [closerImage, setCloserImage] = useState([]);

  const [actualStartDate, setActualStartDate] = useState(false);
  const [actualEndDate, setActualEndDate] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const actualStartValue = watch('PlannedStartDate');
  const actualEndValue = watch('PlannedEndDate');
  const finalActualStartValue = watch('ActualStartDate');
  const finalActualEndValue = watch('ActualEndDate');
  const q = watch('AttachFiles.0');

  useEffect(() => {
    console.log(image);
  }, [image]);

  useEffect(() => {
    GET_PROJECT_NAME()
      .then((res) => {
        setLoading(true);
        setProjectName([...res?.data?.data, { name: 'Other', id: 13 }]);
        setProjectNameValue(res?.data?.data[0].id);
        setLoading(false);
      })
      .catch((err) => {
        sweetAlertComponent('error', 'something went wrong');
      });

    GET_PROJECT_TYPE()
      .then((res) => {
        setLoading(true);
        setProjectType(res?.data?.data);
        setProjectTypeValue(res?.data?.data[0].id);
        setLoading(false);
      })
      .catch((err) => {
        sweetAlertComponent('error', 'something went wrong');
      });

    GET_PROJECT_DOMAIN()
      .then((res) => {
        setLoading(true);
        setProjectDomain(res?.data?.data);
        setProjectDomainValue(res?.data?.data[0].id);
        setLoading(false);
      })
      .catch((err) => {
        sweetAlertComponent('error', 'something went wrong');
      });

    GET_CURRENCY()
      .then((res) => {
        setLoading(true);
        setCurrency(res?.data?.data);
        setCurrencyId(res?.data?.data[0].id);
        setLoading(false);
      })
      .catch((err) => {
        sweetAlertComponent('error', 'something went wrong');
      });

    GET_PROJECT_STATUS()
      .then((res) => {
        setLoading(true);
        setProjectStatus(res?.data?.data);
        setProjectStatusValue(res?.data?.data[0].id);
        setLoading(false);
      })
      .catch((err) => {
        sweetAlertComponent('error', 'something went wrong');
      });
  }, []);

  const addData = (data) => {
    const formData = new FormData();
    formData.append('AttachFiles', image);
    formData.append('ManagerAttachFile', managerImage);
    formData.append('ManagerClosedAttachFiles', closerImage);
    formData.append('ProjectNameId', projectNameValue);
    formData.append('ProjectDomainId', projectDomainValue);
    formData.append('ProjectTypeId', projectTypeValue);
    formData.append('EstimatedEffortUnit', estimatedEfforts);
    formData.append('InHouse', inHouse);
    formData.append('BillingVisibleToManager', visibleToManager);
    formData.append('CurrencyId', CurrencyId);
    formData.append('ProjectStatusId', projectStatusValue);
    formData.append('Description', data.Description);
    formData.append('ProjectCostValue', data.ProjectCostValue);
    formData.append('PlannedStartDate', data.PlannedStartDate);
    formData.append('PlannedEndDate', data.PlannedEndDate);
    formData.append('ActualStartDate', data.ActualStartDate);
    formData.append('ActualEndDate', data.ActualEndDate);
    formData.append('DelayReasonStartDate', data.DelayReasonStartDate);
    formData.append('DelayReasonEndDate', data.DelayReasonEndDate);
    formData.append('Name', data.Name);
    formData.append('LanguageId', 1);
    formData.append('publicKey', 'key@123');

    console.log(formData);

    ADD_GENERAL_INFO(formData)
      .then((res) => {
        sweetAlertComponent('success', 'Data Saved Sucessfully');
      })
      .catch((err) => {
        sweetAlertComponent('error', 'Something went wrong');
      });
  };
  return (
    <div>
      {loading && <div className="loading"></div>}
      <DashboardTitle title={'General Information'} />
      <div className="container mt-3">
        <form onSubmit={handleSubmit(addData)}>
          <Row>
            <Col lg={2} style={{ width: '8rem' }}>
              Project Name
            </Col>

            <Col lg={4}>
              <Select option={projectName} setSelectedValue={setProjectNameValue} />
              {projectNameValue == 13 && (
                <input type="text" style={{ width: '100%', height: '1.9rem' }} name="Name" {...register('Name')} />
              )}
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
              <div>
                <input
                  type="text"
                  style={{ width: '12rem', height: '1.9rem' }}
                  name="EffortsDuration"
                  {...register('EffortsDuration', {
                    required: '*Estimated efforts are required',
                    valueAsNumber: true,
                    pattern: {
                      value: /^[0-9]+$/,
                      message: 'Please enter a valid efforts',
                    },
                  })}
                />
                <div className="text-danger small">{errors?.EffortsDuration && errors.EffortsDuration.message}</div>
              </div>

              <Select
                option={[
                  { name: 'Hour', value: 5 },
                  { name: 'Days', value: 10 },
                  { name: 'Weeks', value: 15 },
                  { name: 'Months', value: 20 },
                  { name: 'Years', value: 25 },
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
              <textarea
                className="generalInformation-textArea"
                style={{ width: '100%' }}
                name="Description"
                {...register('Description', { required: '*Description is required' })}
              ></textarea>
              <div className="text-danger small">{errors?.Description && errors.Description.message}</div>
            </Col>

            <Col lg={2} style={{ width: '8rem' }}>
              <div>Project Cost</div>
            </Col>

            <Col
              lg={4}
              style={{
                justifyContent: 'flex-start',
                display: 'flex',
              }}
            >
              <Select option={currency} setSelectedValue={setCurrencyId} />
              <div>
                <input
                  type="text"
                  style={{ width: '12rem', height: '1.9rem' }}
                  name="ProjectCostValue"
                  {...register('ProjectCostValue', {
                    required: '*Project cost is required',
                    valueAsNumber: true,
                    pattern: {
                      value: /^[0-9]+$/,
                      message: 'Please enter valid project cost',
                    },
                  })}
                />
                <div className="text-danger small">{errors?.ProjectCostValue && errors.ProjectCostValue.message}</div>
              </div>
            </Col>
          </Row>

          <Row id="qw">
            <Col lg={2} style={{ width: '8rem' }}></Col>

            <Col lg={4}></Col>

            <Col lg={2} style={{ width: '8rem' }}>
              <div>Hourly Cost</div>
            </Col>

            <Col
              lg={4}
              style={{
                justifyContent: 'flex-start',
                display: 'flex',
              }}
            >
              <Select option={currency} optionToShow={CurrencyId} disable={true} />
              <div>
                <input
                  type="text"
                  style={{ width: '12rem', height: '1.9rem' }}
                  name="ProjectCostValue"
                  {...register('HourlyCostValue', {
                    required: '*Hourly cost is required',
                    valueAsNumber: true,
                    pattern: {
                      value: /^[0-9]+$/,
                      message: 'Please enter valid project cost',
                    },
                  })}
                />
                <div className="text-danger small">{errors?.ProjectCostValue && errors.ProjectCostValue.message}</div>
              </div>
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
                  <input type="radio" name="1" value={true} onChange={(e) => setInhouse(e.target.value)} />
                  <span className="ml-4">Yes</span>
                </div>
                <div className="d-flex gap-2">
                  <input
                    type="radio"
                    name="1"
                    value={false}
                    onChange={(e) => setInhouse(e.target.value)}
                    defaultChecked
                  />
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
                <label className="d-flex gap-3 ">
                  <div>Upload Docx</div>
                  <input
                    onChange={(e) => {
                      setImage([...image, e.target.files[0]]);
                    }}
                    type="file"
                    id="AttachFiles"
                    className="d-none"
                  />
                  <div for="file">
                    <img src={Uploads} alt="images" />
                  </div>
                </label>
              </div>
            </Col>

            <Col lg={2} style={{ width: '8rem' }}>
              Billing visible to managers
            </Col>

            <Col lg={4}>
              <div className="d-flex gap-5">
                <div className="d-flex gap-2">
                  <input type="radio" name="2" value={true} onChange={(e) => setvisibleToManager(e.target.value)} />
                  <span className="ml-4">Yes</span>
                </div>
                <div className="d-flex gap-2">
                  <input
                    type="radio"
                    name="2"
                    value={false}
                    onChange={(e) => setvisibleToManager(e.target.value)}
                    defaultChecked
                  />
                  <span className="ml-4">No</span>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col></Col>
          </Row>
          <Row>
            <Col xs={3} style={{ width: '13rem' }}>
              Attachment (For Manager)
            </Col>

            <Col xs={6}>
              <div className="d-flex gap-3 upload-image">
                <label className="d-flex gap-3 ">
                  <div>Upload Docx</div>
                  <input
                    onChange={(e) => {
                      setManagerImage([...image, e.target.files[0]]);
                    }}
                    type="file"
                    id="AttachFiles"
                    className="d-none"
                  />
                  <div for="file">
                    <img src={Uploads} alt="images" />
                  </div>
                </label>
              </div>
            </Col>
          </Row>

          <Row>
            <Col></Col>
          </Row>

          <Row>
            <Col xs={3} style={{ width: '13rem' }}>
              Attachment (For Manager on closure)
            </Col>

            <Col xs={6}>
              <div className="d-flex gap-3 upload-image">
                <label className="d-flex gap-3 ">
                  <div>Upload Docx</div>
                  <input
                    onChange={(e) => {
                      setCloserImage([...image, e.target.files[0]]);
                    }}
                    type="file"
                    id="AttachFiles"
                    className="d-none"
                  />
                  <div for="file">
                    <img src={Uploads} alt="images" />
                  </div>
                </label>
              </div>
            </Col>
          </Row>

          <Row>
            <Col></Col>
          </Row>

          <Row className="mt-4">
            <Col lg={2} style={{ width: '8rem' }}>
              Planned Start Date
            </Col>

            <Col lg={4}>
              <input
                type="date"
                style={{ width: '100%' }}
                name="PlannedStartDate"
                {...register('PlannedStartDate', { required: '*Date is required' })}
              />
              <div className="text-danger small">{errors?.PlannedStartDate && errors.PlannedStartDate.message}</div>
            </Col>

            <Col lg={2} style={{ width: '8rem' }}>
              Planned End Date
            </Col>

            <Col lg={4}>
              <input
                type="date"
                style={{ width: '100%' }}
                name="PlannedEndDate"
                {...register('PlannedEndDate', { required: '*Date is required' })}
                min={actualStartValue}
              />
              <div className="text-danger small">{errors?.PlannedEndDate && errors.PlannedEndDate.message}</div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col lg={2} style={{ width: '8rem' }}>
              <div className="d-flex ">
                <div>Actual Start Date</div>
                <div>
                  <input
                    type={'checkbox'}
                    onClick={() => {
                      setActualStartDate(!actualStartDate);
                      setValue('ActualStartDate', actualStartValue);
                    }}
                  />
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <input
                type="date"
                style={{ width: '100%' }}
                name="ActualStartDate"
                value={actualStartDate == true ? actualStartValue : finalActualStartValue}
                {...register('ActualStartDate')}
              />
            </Col>

            <Col lg={2} style={{ width: '8rem' }}>
              <div className="d-flex ">
                <div>Actual End Date</div>
                <div>
                  <input
                    type={'checkbox'}
                    onClick={() => {
                      setActualEndDate(!actualEndDate);
                      setValue('ActualEndDate', actualEndValue);
                    }}
                  />
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <input
                type="date"
                style={{ width: '100%' }}
                value={actualEndDate == true ? actualEndValue : finalActualEndValue}
                min={actualStartValue}
                name="ActualEndDate"
                {...register('ActualEndDate')}
              />
            </Col>
          </Row>

          <Row className="mt-4 pb-4">
            <Col lg={2} style={{ width: '8rem' }}>
              Reason If any Delay in Start Date
            </Col>

            <Col lg={4}>
              <textarea
                className="generalInformation-textArea"
                style={{ width: '100%' }}
                {...register('DelayReasonStartDate')}
              ></textarea>
            </Col>

            <Col lg={2} style={{ width: '8rem' }}>
              Reason If any Delay in End Date
            </Col>

            <Col lg={4}>
              <textarea
                className="generalInformation-textArea"
                style={{ width: '100%' }}
                {...register('DelayReasonEndDate')}
              ></textarea>
            </Col>
          </Row>

          <Row>
            <Col>
              <SaveAndContinue />
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
};

export default GeneralInformation;
