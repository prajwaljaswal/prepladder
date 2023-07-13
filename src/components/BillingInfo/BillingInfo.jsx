import React from 'react'
import DashboardTitle from '../common/DashboardTitle/DashboardTitle'
import {Row,Col} from "react-bootstrap"
import Input from '../common/Input/Input'
import Select from '../common/Select/Select'
import BillingInfoTable from './BillingInfoTable'
import SaveAndContinue from '../common/SaveAndContinue/SaveAndContinue'

const BillingInfo = () => {
  return (
    <div>
        <DashboardTitle title={"Billing Info"}/>
        <div className='container mt-3'>
          <Row>
            <Col className='d-flex justify-content-end'>
            <div className='btn btn-primary'>Add New</div>
            </Col>
          </Row>
        <Row>
          <Col lg={2} className='billing-col'>
            Milestone
          </Col>

          <Col lg={4}>
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

          <Col lg={2} className='billing-col'>
           Choose Date
          </Col>

          <Col lg={4} >
          <Input type={"date"} className={"billing-input"} />
          </Col>
        </Row>

        <Row className='mt-4'>
          <Col lg={2} className='billing-col'>
            Cost
          </Col>

          <Col lg={4} >
          <Input type={"text"} className={"billing-input"} />
          </Col>

          <Col lg={2}className ='billing-col'>
         Hours
          </Col>

          <Col lg={4} >
          <Input type={"text"} className={"billing-input"} />
          </Col>
        </Row>

        <Row>
          <Col className='d-flex justify-content-end'>
          <div className='btn btn-primary'>Save</div>
          </Col>
        </Row>

        <Row className='mt-4'>
          <Col>
          <BillingInfoTable/>
          </Col>
        </Row>


        <Row className='mt-4'>
          <Col>
          <SaveAndContinue/>
          </Col>
        </Row>
        </div>
    </div>
  )
}

export default BillingInfo