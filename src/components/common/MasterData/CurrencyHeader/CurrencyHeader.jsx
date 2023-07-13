import React,{useEffect, useState} from 'react'
import MasterDataTitle from '../MasterDataTitle/MasterDataTitle';
import {Row,Col} from "react-bootstrap"
import Input from "../../../../components/common/Input/Input"
import CancelAndSave from '../CancelAndSave/CancelAndSave'
import Uploads from "../../../../assests/upload.svg"
import {MdCancel} from "react-icons/md"




const CurrencyHeader = ({title,addTitle,name,inputValue, setInputValue,submit,error,cancel,setImage,edit,setFileToShowCurrency,fileToShowCurrency}) => {
const [fileToShow, setFileToShow] = useState(fileToShowCurrency)
const clearFile = ()=>{
  setFileToShow("")
  setFileToShowCurrency("")
}

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
            <Col md ={6}>
            <div className='master-col'>
            <div>{name}</div>
            <Input type={"text"} setInputValue={setInputValue} inputValue = {inputValue} error={error}/>
            </div>
            </Col>

            <Col md ={6}>
            <div className='master-col'>
            <div>Currency Icon</div>
            <label className="d-flex gap-3 upload-image">
            <div>Upload Icon</div>
            <input type = "file" id="file" accept="image/png, image/gif, image/jpeg" onChange={(e)=>{setImage(e.target.files[0])
              setFileToShow(URL.createObjectURL(e.target.files[0]))
              }} className='d-none'/>
            <div for = "file"><img src={Uploads} alt="images"/></div>
            </label>
            </div>

            <div style={{marginLeft:"3rem" ,marginTop:"1rem"}}>
            { fileToShow ? <><img src = {fileToShow} width={100} height={100} alt ="preview"/> <MdCancel color='red' style={{position:"absolute" , marginTop:"-.55rem" }} onClick={()=>{
              setFileToShow("")
            }}/></> : "" }
            </div>
            </Col>
        </Row>
        <Row className='mt-4 mb-3 '>
          <Col>
          <div className='cancel-save'>
          <CancelAndSave submit = {submit} cancel={cancel} edit={edit} clearFile ={clearFile} />
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

export default CurrencyHeader