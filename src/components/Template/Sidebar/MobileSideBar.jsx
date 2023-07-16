import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import dashboard from '../../../assests/dashboard.svg';
import Accordion from './Accordion';
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';

const MobileSidebar = () => {
  const [show, setShow] = useState(false);
  const [activeElement, setActiveElement] = useState(0);
  const [projectManagement, setProjectManagement] = useState(false);
  const [masterData, setMasterData] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  return (
    <div className="container">
      <Button variant="primary" onClick={handleShow} className="menu-button">
        <RxHamburgerMenu />
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header className="drawer-background" closeButton></Offcanvas.Header>
        <Offcanvas.Body className="drawer-background">
          <div className="sticky">
            <div>
              <div className="sidebar-element">
                <div>
                  <img src={dashboard} alt="dashboard" />
                </div>
                <div
                  style={{ fontSize: '16px' }}
                  className={activeElement == 0 && 'accordion-element-class'}
                  onClick={() => {
                    navigate('/searchPage');
                    setActiveElement(0);
                    setProjectManagement(!projectManagement);
                    setMasterData(!masterData);
                  }}
                >
                  Dashboard
                </div>
              </div>
            </div>

            <div>
              <div className="sidebar-element">
                <div>
                  <img src={dashboard} alt="dashboard" />
                </div>
                <Accordion
                  setActiveElement={setActiveElement}
                  projectManagementHeading={'Project Management'}
                  masterDataHeading={'Master Data'}
                  projectManagementSidebar={projectManagement}
                  masterDataSidebar={masterData}
                />
              </div>
            </div>
            <div>
              <div className="sidebar-element">
                <div>
                  <img src={dashboard} alt="dashboard" />
                </div>
                <div
                  style={{ fontSize: '16px' }}
                  className={activeElement == 1 && 'accordion-element-class'}
                  onClick={() => {
                    setActiveElement(1);
                    setProjectManagement(!projectManagement);
                    setMasterData(!masterData);
                  }}
                >
                  All projects
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default MobileSidebar;
