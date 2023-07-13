import React from 'react'
import backArrow from "../../../assests/back.svg"
import { useNavigate } from 'react-router-dom'

const AddNewProject = () => {
  const navigate = useNavigate()
  return (
   <div className='new-project-container'>
    <div className='project-title'>Add a new project</div>
    <div className='project-subTitle'> 
    <div><img src={backArrow} alt='back arrow' className="back-arrow"/></div>
    <div onClick={()=>navigate("/searchPage")}> Back To Project List</div>
    </div>
   </div>
  )
}

export default AddNewProject