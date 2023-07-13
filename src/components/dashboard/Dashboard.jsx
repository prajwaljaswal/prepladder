import React from "react";

import AddNewProject from "../common/AddNewProject/AddNewProject";
import Sidebar from "../Sidebar/Sidebar";
import MobileSidebar from "../Sidebar/MobileSideBar";
import TabView from "../Tab/Tab";

const Dashboard = () => {
  return (
    <div>
      <AddNewProject />
          <TabView />
    </div>
  );
};

export default Dashboard;
