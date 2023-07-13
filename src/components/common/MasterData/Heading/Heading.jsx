import React from 'react'
import MasterDataTitle from '../MasterDataTitle/MasterDataTitle';
import {Row,Col} from "react-bootstrap"
import Input from "../../../../components/common/Input/Input"
import CancelAndSave from '../CancelAndSave/CancelAndSave';



const Heading = ({title,addTitle,name,inputValue, setInputValue,submit,error,cancel,edit}) => {
  return (
    <div className='container'>
    <MasterDataTitle title={title}/>
     <div className='master-head-container'>
        <Row>
            <Col>
            <div className='master-name'>{addTitle}</div>
            </Col>
        </Row>


        <Row>
            <Col>
            <div className='master-col'>
            <div>{name}</div>
            <Input type={"text"} inputValue = {inputValue}  setInputValue ={setInputValue} error ={error}  />
            </div>
            </Col>
        </Row>
        <Row className='mt-4 mb-3 '>
          <Col>
          <div className='cancel-save'>
          <CancelAndSave submit ={submit} cancel ={cancel} edit = {edit}/>
          </div>
          </Col>
        </Row>
     </div>

     <Row>
      <Col>
     
      </Col>
     </Row>
        
        </div>
  )
}

export default Heading