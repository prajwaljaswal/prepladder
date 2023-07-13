import React from "react";
import { Table } from "react-bootstrap";
import Edit from "../../../../assests/edit.svg";
import Delete from "../../../../assests/deleteNew.svg";

const MasterDataTable = ({ heading, tableData }) => {
  return (
    <div className="container">
      <Table responsive className=" table-responsive text-center">
        <thead>
          <tr>
            {heading.map((data, index) => {
              return (
                <th scope="col" className="master-head">
                  {data}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{data.name}</td>
                <td>{data.createdBy}</td>
                <td>{data.creationDate}</td>
                <td>{data.updatedBy}</td>
                <td>{data.updatedDate}</td>
                <td>
                  <div className="d-flex gap-2 justify-content-center">
                    <div>
                      <img src={Edit} alt="edit" />
                    </div>
                    <div>
                      <img src={Delete} alt="delete" />
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default MasterDataTable;
