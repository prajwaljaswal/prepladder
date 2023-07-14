import React, { useState } from 'react';
import { IoIosRadioButtonOff } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Accordion = ({ projectManagementHeading, masterDataHeading, masterDataFields }) => {
  const [projectManagement, setProjectManagement] = useState(false);
  const [masterData, setMasterData] = useState(false);

  const masterDataSetting = () => {
    setMasterData(!masterData);
  };
  const projectManagementSetting = () => {
    setProjectManagement(!projectManagement);
    if (masterData === true) {
      setMasterData(false);
    }
  };
  const navigate = useNavigate();

  return (
    <div>
      <div onClick={projectManagementSetting} style={{ fontSize: '16px' }}>
        {projectManagementHeading}
      </div>
      <div onClick={masterDataSetting}>
        <div className={`${projectManagement ? 'mt-3' : ''}`}>{projectManagement ? masterDataHeading : ''}</div>
      </div>
      {masterData && projectManagement ? (
        <div className="master-data-list">
          <div className="d-flex gap-2">
            <div>
              <IoIosRadioButtonOff />
            </div>
            <div onClick={() => navigate('/searchPage/projectName')}>Project Name</div>
          </div>

          <div className="d-flex gap-2">
            <div>
              <IoIosRadioButtonOff />
            </div>
            <div onClick={() => navigate('/searchPage/projectStatus')}>Project Status</div>
          </div>

          <div className="d-flex gap-2">
            <div>
              <IoIosRadioButtonOff />
            </div>
            <div onClick={() => navigate('/searchPage/projectType')}>Project Type</div>
          </div>

          <div className="d-flex gap-2">
            <div>
              <IoIosRadioButtonOff />
            </div>
            <div onClick={() => navigate('/searchPage/Currency')}>Currency</div>
          </div>

          {/* <div className="d-flex gap-2">
            <div>
              <IoIosRadioButtonOff />
            </div>
            <div onClick={() => navigate("/searchPage/Email")}>Emails List</div>
          </div> */}

          <div className="d-flex gap-2">
            <div>
              <IoIosRadioButtonOff />
            </div>
            <div onClick={() => navigate('/searchPage/ProjectDomain')}>Project Domain</div>
          </div>

          <div className="d-flex gap-2">
            <div>
              <IoIosRadioButtonOff />
            </div>
            <div onClick={() => navigate('/searchPage/TechDepartment')}>Tech Department</div>
          </div>

          <div className="d-flex gap-2">
            <div>
              <IoIosRadioButtonOff />
            </div>
            <div onClick={() => navigate('/searchPage/AddTech')}>Tech Stack</div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Accordion;
