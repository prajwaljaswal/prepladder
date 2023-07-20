import React, { useState, useEffect } from 'react';
import DashboardTitle from '../../common/DashboardTitle';
import { Row, Col } from 'react-bootstrap';
import Select from '../../common/Select';
import SaveAndContinue from '../../common/SaveAndContinue';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { ADD_CLIENT_DETAILS, GET_COMMUNICATION_MODE } from '../../../api/APIEndpoints';
import { sweetAlertComponent } from '../../common/Alert';
import { useForm } from 'react-hook-form';

const ClientDetails = () => {
  const [communicationModeDropDown, setCommunicationModeDropDown] = useState([]);
  const [communicationModeId, setcommunicationModeId] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    GET_COMMUNICATION_MODE().then((res) => {
      setCommunicationModeDropDown(res?.data?.data);
      setcommunicationModeId(res?.data?.data[0].id);
    });
  }, []);

  const addData = (data) => {
    const newData = {
      ...data,
      communicationModeId: communicationModeId,
      publicKey: 'key@123',
    };
    ADD_CLIENT_DETAILS(newData)
      .then((res) => {
        reset();
        sweetAlertComponent('success', 'Client details added');
      })
      .catch((err) => {
        sweetAlertComponent('error', 'something went wrong');
      });
  };

  //   useEffect(()=>{
  // axios.get("https://graph.microsoft.com/v1.0/users", {headers: {
  //   'Authorization': `Bearer ${sessionStorage.getItem("token")}`
  // }
  // }).then((res)=>{
  //   console.log(res)
  // })
  //   },[])

  return (
    <div>
      <DashboardTitle title={'Client Details'} />
      <div className="container mt-3">
        <form onSubmit={handleSubmit(addData)}>
          <Row>
            <Col lg={2} className="client-col">
              Client Name
            </Col>

            <Col lg={4}>
              <input
                type={'text'}
                className={'client-input'}
                name="clientName"
                {...register('clientName', {
                  required: '*Name is required',
                  pattern: {
                    value: /^[a-zA-Z ]*$/,
                    message: 'Only char are allowed',
                  },
                })}
              />
              <div className="text-danger small">{errors?.clientName && errors.clientName.message}</div>
            </Col>

            <Col lg={2} className="client-col">
              Phone Number
            </Col>

            <Col lg={4}>
              <div className="d-flex">
                <div style={{ flexGrow: '1' }}>
                  <PhoneInput inputClass="country-code" enableSearch country={'in'} />
                </div>
                <div style={{ flexGrow: '11' }}>
                  <input
                    type={'text'}
                    style={{ width: '100%' }}
                    name="phoneNumber"
                    {...register('phoneNumber', {
                      required: '*Phone number is required',
                      pattern: {
                        value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                        message: 'Please enter a valid phone number',
                      },
                    })}
                  />
                  <div className="text-danger small">{errors?.phoneNumber && errors.phoneNumber.message}</div>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col lg={2} className="client-col">
              Address
            </Col>

            <Col lg={4}>
              <input
                type={'text'}
                className={'client-input'}
                name="address"
                {...register('address', { required: '*Addres is required' })}
              />
              <div className="text-danger small">{errors?.address && errors.address.message}</div>
            </Col>

            <Col lg={2} className="client-col">
              Email Id
            </Col>

            <Col lg={4}>
              <input
                type={'email'}
                className={'client-input'}
                name="clientEmailId"
                {...register('clientEmailId', { required: '*Email is required' })}
              />
              <div className="text-danger small">{errors?.clientEmailId && errors.clientEmailId.message}</div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col lg={2} className="client-col">
              Communication Mode
            </Col>

            <Col lg={4}>
              {communicationModeDropDown && (
                <Select option={communicationModeDropDown} setSelectedValue={setcommunicationModeId} />
              )}
            </Col>
          </Row>

          <div className="client-ruler"></div>

          <Row className="mt-4">
            <Col lg={2} className="client-col">
              Contact Person Name
            </Col>

            <Col lg={4}>
              <input
                type={'text'}
                className={'client-input'}
                name="contactPersonName"
                {...register('contactPersonName', {
                  required: '*Name  is required',
                  pattern: {
                    value: /^[a-zA-Z ]*$/,
                    message: 'Only char are allowed',
                  },
                })}
              />
              <div className="text-danger small">{errors?.contactPersonName && errors.contactPersonName.message}</div>
            </Col>

            <Col lg={2} className="client-col">
              Email Id
            </Col>

            <Col lg={4}>
              <input
                type={'email'}
                className={'client-input'}
                name="contactPersonEmailId"
                {...register('contactPersonEmailId', { required: '*Email ID is required' })}
              />
              <div className="text-danger small">
                {errors?.contactPersonEmailId && errors.contactPersonEmailId.message}
              </div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col lg={2} className="client-col">
              Phone Number
            </Col>

            <Col lg={4}>
              <div className="d-flex">
                <div style={{ flexGrow: '1' }}>
                  <PhoneInput inputClass="country-code" enableSearch country={'in'} />
                </div>
                <div style={{ flexGrow: '11' }}>
                  <input
                    type={'text'}
                    className={'client-input'}
                    style={{ width: '100%' }}
                    name="contactPersonPhoneNumber"
                    {...register('contactPersonPhoneNumber', {
                      required: '*Phone number is required',
                      pattern: {
                        value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                        message: 'Please enter a valid phone number',
                      },
                    })}
                  />
                  <div className="text-danger small">
                    {errors?.contactPersonPhoneNumber && errors.contactPersonPhoneNumber.message}
                  </div>
                </div>
              </div>
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

export default ClientDetails;
