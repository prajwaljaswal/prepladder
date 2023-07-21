import React from 'react';

import DashboardTitle from '../../common/DashboardTitle';
import { Row, Col } from 'react-bootstrap';
import Input from '../../common/Input';
import SaveAndContinue from '../../common/SaveAndContinue';
import { useForm } from 'react-hook-form';
import { ADD_MEETINGS_DETAILS } from '../../../../src/api/APIEndpoints';
import { sweetAlertComponent } from '../../common/Alert';

const Meetings = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const addData = (data) => {
    const newData = {
      ...data,
      projectId: 13,
      publicKey: 'key@123',
      LanguageId: 1,
    };
    ADD_MEETINGS_DETAILS(newData)
      .then((res) => {
        sweetAlertComponent('success', 'Data added successfully');
      })
      .catch((err) => {
        sweetAlertComponent('error', 'Something went wrong');
      });
  };

  const actualUAT = watch('plannedUAT');
  const plannedLive = watch('');
  return (
    <div>
      <DashboardTitle title={'Meeting'} />
      <div className="container mt-3">
        <form onSubmit={handleSubmit(addData)}>
          <Row className="mt-4">
            <Col lg={2} className="meeting-col">
              External Kick Off
            </Col>

            <Col lg={4}>
              <input
                type="date"
                className={'meeting-input'}
                name="externalKickOff"
                {...register('externalKickOff', { required: '*External kick off date is required' })}
              />
              <div className="text-danger small">{errors?.externalKickOff && errors.externalKickOff.message}</div>
            </Col>

            <Col lg={2} className="meeting-col">
              Internal Kick Off
            </Col>

            <Col lg={4}>
              <input
                type="date"
                className={'meeting-input'}
                name="internalKickOff"
                {...register('internalKickOff', { required: '*Internal kick off date is required ' })}
              />
              <div className="text-danger small">{errors?.internalKickOff && errors.internalKickOff.message}</div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col lg={2} className="meeting-col">
              Planned UAT
            </Col>

            <Col lg={4}>
              <input
                type="date"
                className={'meeting-input'}
                name="plannedUAT"
                {...register('plannedUAT', { required: '*Planned UAT is required' })}
              />
              <div className="text-danger small">{errors?.plannedUAT && errors.plannedUAT.message}</div>
            </Col>

            <Col lg={2} className="meeting-col">
              Planned Live
            </Col>

            <Col lg={4}>
              <input
                type="date"
                className={'meeting-input'}
                name="plannedLive"
                {...register('plannedLive', { required: '*Planned live is required' })}
              />
              <div className="text-danger small">{errors?.plannedLive && errors.plannedLive.message}</div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col lg={2} className="meeting-col">
              <div className="d-flex gap-2">
                <div>Actual UAT</div>
                <div>
                  <input type={'checkbox'} />
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <input type="date" name="actualUAT" className={'meeting-input'} {...register('actualUAT')} />
              <div className="text-danger small">{errors?.actualUAT && errors.actualUAT.message}</div>
            </Col>

            <Col lg={2} className="meeting-col">
              <div className="d-flex gap-2">
                <div>Actual Live</div>
                <div>
                  <input type={'checkbox'} />
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <input type="date" name="actualLive" className={'meeting-input'} {...register('actualLive')} />
              <div className="text-danger small">{errors?.actualLive && errors.actualLive.message}</div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col lg={2} className="meeting-col">
              Reason If any Delay in UAT
            </Col>

            <Col lg={4}>
              <textarea name="delayReasonUAT" className="meeting-textArea" {...register('delayReasonUAT')}></textarea>
              <div className="text-danger small">{errors?.delayReasonUAT && errors.delayReasonUAT.message}</div>
            </Col>

            <Col lg={2} className="meeting-col">
              Reason If any Delay in Live
            </Col>

            <Col lg={4}>
              <textarea className="meeting-textArea" name="delayReasonLive" {...register('delayReasonLive')}></textarea>
              <div className="text-danger small">{errors?.delayReasonLive && errors.delayReasonLive.message}</div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <SaveAndContinue />
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
};

export default Meetings;
