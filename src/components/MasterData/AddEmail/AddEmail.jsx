import React from 'react';
import Heading from '../../common/MasterData/Heading/Heading';
import AddEmailTable from './AddEmailTable';
import data from './Email.json';
import { Row, Col } from 'react-bootstrap';

const AddEmail = () => {
  return (
    <div className="container">
      <Heading title={"User's Email List"} addTitle={'Add Email'} name={'Add Email'} />
      <Row className="mt-4">
        <Col>
          <AddEmailTable
            tableData={data}
            heading={[
              'Sr No.',
              'User Email',
              'Email ID',
              'Created By',
              'Creation Date',
              'Updated By',
              'Updation Date',
              'Action',
            ]}
          />
        </Col>
      </Row>
    </div>
  );
};

export default AddEmail;
