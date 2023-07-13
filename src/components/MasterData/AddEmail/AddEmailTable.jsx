import React from 'react'
import {Table} from "react-bootstrap"
import Edit from "../../../../src/assests/edit.svg"
import Delete from "../../../../src/assests/deleteNew.svg"


const AddEmailTable= ({heading,tableData}) => {
  return (
    <div className='container'>
        <Table  responsive className=' table-responsive text-center'>
  <thead>
    <tr>
        {heading.map((data,index)=>{
            return(
                <th scope='col' className='master-head'>{data}</th>
            )
               
        })}
    </tr>
  </thead>
  <tbody>
    {
        tableData.map((data,index)=>{
            return(
                <tr>
                <th scope="row">{index+1}</th>
                <td>{data.userEmail}</td>
                <td>{data.emaild}</td>
                <td>{data.createdBy}</td>
                <td>{data.creationDate}</td>
                <td>{data.updatedBy}</td>
                <td>{data.updationDate}</td>
                <td>
                  <div className='d-flex gap-2 justify-content-center'>
                    <div><img src={Edit} alt='edit'/></div>
                    <div><img src={Delete} alt='delete'/></div>
                  </div>
                </td>
              </tr>
            )
        })
}
  </tbody>
</Table>
    </div>




  )
}

export default AddEmailTable