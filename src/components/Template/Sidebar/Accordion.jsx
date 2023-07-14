import React, { useState } from 'react';
import { IoIosRadioButtonOff } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

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
      <div onClick={projectManagementSetting} className="project-management-heading">
        <div>{projectManagementHeading}</div>
        <div>{projectManagement ? <RiArrowDropDownLine size={'25px'} /> : <RiArrowDropUpLine size={'25px'} />}</div>
      </div>
      <div onClick={masterDataSetting} className="d-flex">
        <div className={`${projectManagement ? 'master-data-heading' : ''}`}>
          {projectManagement ? masterDataHeading : ''}
        </div>
        <div className={!projectManagement ? 'd-none' : 'master-data-heading'}>
          {masterData ? <RiArrowDropDownLine size={'25px'} /> : <RiArrowDropUpLine size={'25px'} />}
        </div>
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
