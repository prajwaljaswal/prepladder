import React, { useState } from 'react';
import { IoIosRadioButtonOff } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

const Accordion = ({ projectManagementHeading, masterDataHeading, masterDataFields }) => {
  const [projectManagement, setProjectManagement] = useState(false);
  const [masterData, setMasterData] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

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
  const accordionItems = [
    {
      routeName: 'Project Name',
      routeURL: '/searchPage/projectName',
    },
    {
      routeName: 'Project Status',
      routeURL: '/searchPage/projectStatus',
    },

    {
      routeName: 'Project Type',
      routeURL: '/searchPage/projectType',
    },
    {
      routeName: 'Currency',
      routeURL: '/searchPage/Currency',
    },

    {
      routeName: 'Project Domain',
      routeURL: '/searchPage/ProjectDomain',
    },

    {
      routeName: 'Tech Department',
      routeURL: '/searchPage/TechDepartment',
    },
    {
      routeName: 'Tech Stack',
      routeURL: '/searchPage/AddTech',
    },
  ];

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
          {accordionItems?.map((data, index) => {
            return (
              <div
                className={
                  activeAccordion !== null && index == activeAccordion
                    ? 'accordion-element-class d-flex gap-2'
                    : 'd-flex gap-2'
                }
              >
                <div>
                  <IoIosRadioButtonOff />
                </div>
                <div
                  onClick={() => {
                    navigate(data?.routeURL);
                    setActiveAccordion(index);
                  }}
                >
                  {data?.routeName}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Accordion;
