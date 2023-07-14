import React, { useState } from 'react';
import GeneralInformation from '../GeneralInformation/GeneralInformation';
import ClientDetails from '../clientDetails/ClientDetails';
import ProjectManagedBy from '../ProjectMangedBy/ProjectManagedBy';
import Meetings from '../Meetings/Meetings';
import ProjectResource from '../ProjectResource/ProjectResource';
import BillingInfo from '../BillingInfo/BillingInfo';
import MonthlyBillableHours from '../MonthlyBillableHours/MonthlyBillableHours';
import TechStack from '../TechStack/TechStack';
import ChangeRequest from '../ChangeRequest/ChangeRequest';
import OtherInfo from '../OtherInfo/OtherInfo';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const TabView = () => {
  const items = [
    {
      key: '1',
      label: `General Details`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: '2',
      label: `Client Details`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: '3',
      label: `Project Managed By`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: '4',
      label: `Meeting`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '5',
      label: `Project Resource`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: '6',
      label: `Billing Info`,
      children: `Content of Tab Pane 3`,
    },

    {
      key: '7',
      label: `Monthly Billable Resource`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: '8',
      label: `Tech-Stack`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: '9',
      label: `Change Resource`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: '10',
      label: `Other`,
      children: `Content of Tab Pane 3`,
    },
  ];
  return (
    <div>
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3" responsive>
        <Tab eventKey="home" title="General Information">
          <GeneralInformation />
        </Tab>
        <Tab eventKey="profile" title="Client Deatils">
          <ClientDetails />
        </Tab>
        <Tab eventKey="contact" title="Project Manged By">
          <ProjectManagedBy />
        </Tab>
        <Tab eventKey="meeting" title="Meetings">
          <Meetings />
        </Tab>
        <Tab eventKey="ProjectResource" title="ProjectResource">
          <ProjectResource />
        </Tab>
        <Tab eventKey="BillingInfo" title="BillingInfo">
          <BillingInfo />
        </Tab>
        <Tab eventKey="MonthlyBillableHours" title="Monthly Billable Hours">
          <MonthlyBillableHours />
        </Tab>
        <Tab eventKey="TechStack" title="Tech Stack">
          <TechStack />
        </Tab>
        <Tab eventKey="ChangeRequest" title="Change Request">
          <ChangeRequest />
        </Tab>
        <Tab eventKey="OtherInfo" title="Other Info">
          <OtherInfo />
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabView;
