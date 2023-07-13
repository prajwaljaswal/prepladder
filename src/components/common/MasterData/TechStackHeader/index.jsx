import React,{useState} from 'react'
import MasterDataTitle from '../MasterDataTitle/MasterDataTitle';
import {Row,Col} from "react-bootstrap"
import Input from "../../../../components/common/Input/Input"
import CancelAndSave from '../CancelAndSave/CancelAndSave'
import Uploads from "../../../../assests/upload.svg"
 import {MdCancel} from "react-icons/md"
import ProjectStatus from '../../../MasterData/ProjectStatus/ProjectStatus';
import Select from "../../../../../src/components/common/Select/Select"



const TechStackHeader = ({edit,optionToShow,title,addTitle,name,inputValue, setInputValue,submit,error,cancel,setSelectedValue,option}) => {

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

        <Col md ={4}>
        <div className='master-col'>
            <div>{"Tech Department"}</div>
            <Select option = {option} setSelectedValue = {setSelectedValue} optionToShow ={optionToShow}/>
            </div>
            </Col>

            <Col md ={6}>
            <div className='master-col'>
            <div>{name}</div>
            <Input type={"text"} setInputValue={setInputValue} inputValue = {inputValue} error={error}/>
            </div>
            </Col>
        </Row>
        <Row className='mt-4 mb-3 '>
          <Col>
          <div className='cancel-save'>
          <CancelAndSave submit = {submit} cancel={cancel} edit={edit} />
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

export default TechStackHeader