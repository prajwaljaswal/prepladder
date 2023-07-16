import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import dashboard from '../../../assests/dashboard.svg';
import Accordion from './Accordion';
import { useNavigate } from 'react-router-dom';

const MobileSidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  return (
    <div className="container">
      <Button variant="primary" onClick={handleShow} className="menu-button">
        Menu
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header className="drawer-background" closeButton></Offcanvas.Header>
        <Offcanvas.Body className="drawer-background">
          <div>
            <div>
              <div className="sidebar-element">
                <div>
                  <img src={dashboard} alt="dashboard" />
                </div>
                <div style={{ fontSize: '16px' }} onClick={() => navigate('/searchPage')}>
                  Dashboard
                </div>
              </div>
            </div>

            <div>
              <div className="sidebar-element">
                <div>
                  <img src={dashboard} alt="dashboard" />
                </div>
                <Accordion projectManagementHeading={'Project Management'} masterDataHeading={'Master Data'} />
              </div>
            </div>
            <div>
              <div className="sidebar-element">
                <div>
                  <img src={dashboard} alt="dashboard" />
                </div>
                <div style={{ fontSize: '16px' }}>All projects</div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default MobileSidebar;
