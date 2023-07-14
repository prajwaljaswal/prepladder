import React from 'react';
import { Table } from 'react-bootstrap';

import edit from '../../../assests/edit.svg';
import deleteIcon from '../../../assests/delete.svg';

const MonthlyBillableHoursTable = () => {
  return (
    <div>
      <Table responsive className="table-bordered table-responsive text-center">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Year</th>
            <th>Month</th>
            <th>Hour</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Milestone 1</td>
            <td>200</td>
            <td>02/01/2023</td>
            <td>
              <div className="d-flex justify-content-center gap-2">
                <div>
                  <img src={edit} alt="edit" />
                </div>
                <div>
                  <img src={deleteIcon} alt="deleteIcon" />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Milestone 1</td>
            <td>200</td>
            <td>02/01/2023</td>
            <td>
              <div className="d-flex justify-content-center gap-2">
                <div>
                  <img src={edit} alt="edit" />
                </div>
                <div>
                  <img src={deleteIcon} alt="deleteIcon" />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Milestone 1</td>
            <td>200</td>
            <td>02/01/2023</td>
            <td>
              <div className="d-flex justify-content-center gap-2">
                <div>
                  <img src={edit} alt="edit" />
                </div>
                <div>
                  <img src={deleteIcon} alt="deleteIcon" />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default MonthlyBillableHoursTable;
