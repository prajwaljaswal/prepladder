import React from "react";
import dashboard from "../../assests/dashboard.svg";
import Accordion from "./Accordion";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="sidebar sticky">
        <div>
          <div className="sidebar-element">
            <div>
              <img src={dashboard} alt="dashboard" />
            </div>
            <div style={{ fontSize: "16px" }} onClick={()=>navigate("/searchPage")}>Dashboard</div>
          </div>
        </div>

        <div>
          <div className="sidebar-element">
            <div>
              <img src={dashboard} alt="dashboard" />
            </div>
            <Accordion
              projectManagementHeading={"Project Management"}
              masterDataHeading={"Master Data"}
            />
          </div>
        </div>
        <div>
          <div className="sidebar-element">
            <div>
              <img src={dashboard} alt="dashboard" />
            </div>
            <div style={{ fontSize: "16px" }}>All projects</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
