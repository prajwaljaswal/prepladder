import React from 'react'
import {Row,Col} from "react-bootstrap";
import DashboardTitle from '../common/DashboardTitle/DashboardTitle'
import Input from '../common/Input/Input';
import Select from '../common/Select/Select';
import SaveAndContinue from '../common/SaveAndContinue/SaveAndContinue';

const TechStack = () => {
  return (
    <div>
        <DashboardTitle title={"Tech Stack"}/>
        <div className='mt-3 container'>
        <div>Technology Used</div>
        <Row className='mt-4'>
          <Col md={2}  className='tech-stack-col'>
            Backend
          </Col>

          <Col sm ={4}>
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

        </Row>


        <Row className='mt-4'>
          <Col md={2}  className='tech-stack-col'>
            Frontend
          </Col>

          <Col sm ={4}>
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

        </Row>



        <Row className='mt-4'>
          <Col md={2} className='tech-stack-col'>
            Mobile
          </Col>

          <Col sm ={4}>
           <div className='d-flex gap-3'>
            <div><Input type={"radio"} name ="1"/></div>
            <div>IOS</div>
            </div>

            <div className='d-flex gap-3'>
            <div><Input type={"radio"} name ="1"/></div>
            <div>Android</div>
            </div>


            <div className='d-flex gap-3'>
            <div><Input type={"radio"} name ="1"/></div>
            <div>Hybrid</div>
            </div>
          
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

export default TechStack