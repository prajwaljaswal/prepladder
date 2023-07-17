import React, { useState } from 'react';
import dashboard from '../../../assests/dashboard.svg';
import Accordion from './Accordion';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [activeElement, setActiveElement] = useState(0);
  const [projectManagement, setProjectManagement] = useState(false);
  const [masterData, setMasterData] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div className="sidebar sticky">
        <div>
          <div className={activeElement == 0 ? 'sidebar-element accordion-element-class' : 'sidebar-element'}>
            <div>
              <img src={dashboard} alt="dashboard" />
            </div>
            <div
              style={{ fontSize: '16px' }}
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
          <div className={activeElement == 1 ? 'sidebar-element accordion-element-class' : 'sidebar-element'}>
            <div>
              <img src={dashboard} alt="dashboard" />
            </div>
            <div
              style={{ fontSize: '16px' }}
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
    </div>
  );
};

export default Sidebar;
