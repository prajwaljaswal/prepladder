import React from 'react';
import backArrow from '../../../assests/back.svg';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Input from '../Input/Input';

const AddProjectSearch = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="new-project-container">
        <div className="project-title">Projects</div>
        <div className="project-subTitle">
          <div onClick={() => navigate('/searchPage/dashboard')} id="btn-primary">
            Add Project
          </div>
        </div>
      </div>

      <div className="master-head-container pt-4 pb-4 mt-3">
        <Row>
          <Col>
            <div className="master-col">
              <div>Project Name</div>
              <Input type={'text'} />
            </div>
          </Col>

          <Col>
            <div className="master-col">
              <div>Project Type</div>
              <Input type={'text'} />
            </div>
          </Col>

          <Col>
            <div className="master-col">
              <div>Manager Name</div>
              <Input type={'text'} />
            </div>
          </Col>

          <Col>
            <div className="master-col">
              <div>Project Status</div>
              <Input type={'text'} />
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-end mt-4 ">Search</div>
      </div>
    </div>
  );
};

export default AddProjectSearch;
