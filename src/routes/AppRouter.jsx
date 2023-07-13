import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import AuthLayout from "../layout/authLayout/AuthLayout";
import Dashboard from "../../src/pages/DashboardPage";
import Notfound from "../components/common/Notfound";
import Login from "../../src/pages/LoginPage";
import SearchPage from "../pages/SearchPage";
import  ProjectNamePage from "../../src/pages/ProjectNamePage";
import ProjectStatus from "../../src/pages/ProjectStatusPage";
import ProjectType from "../../src/pages/ProjectTypePage";
import Currency from "../../src/pages/CurrencyPage";
import Email from "../../src/pages/AddEmailPage";
import ProjectDomain from "../../src/pages/ProjectDomainPage";
import TechDepartment from "../../src/pages/TechDepartmentPage";
import TechStackMasterData from "../../src/components/MasterData/TechStackMasterData/TechStackMasterData"



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Login />} />
        </Route>

        <Route path="/searchPage" element={<AuthLayout />}>
          <Route index element={<SearchPage />} />
          <Route path = "/searchPage/dashboard" element={<Dashboard />} />
          {/* <Route path = "/searchPage/masterData" element={<MasterDataDashboard />} /> */}
          <Route path = "/searchPage/projectName" element={<ProjectNamePage />} />
          <Route path = "/searchPage/projectStatus" element={<ProjectStatus />} />
          <Route path = "/searchPage/projectType" element={<ProjectType />} />
          <Route path = "/searchPage/Currency" element={<Currency />} />
          <Route path = "/searchPage/Email" element={<Email />} />
          <Route path = "/searchPage/ProjectDomain" element={<ProjectDomain />} />
          <Route path = "/searchPage/TechDepartment" element={<TechDepartment />} />
          <Route path = "/searchPage/AddTech" element={<TechStackMasterData />} />
         
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
