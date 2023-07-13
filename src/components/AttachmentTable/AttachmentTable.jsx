import React from 'react'
import {Table} from "react-bootstrap"

const AttachmentTable = () => {
  return (
    <div className='mt-4'>
     <Table responsive className='table-bordered table-responsive text-center'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>File Name</th>
            <th>Attached by</th>
            <th>Date Created</th>
            <th>Size</th>
            <th>Delete</th>
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Direct Bullion Show.pdf</td>
            <td>Harshit Walia</td>
            <td>02/01/2023</td>
            <td>200KB</td>
            <td>Table cell</td>
            
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
           
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
           
          </tr>
        </tbody>
      </Table>
    
    
    </div>
  )
}

export default AttachmentTable