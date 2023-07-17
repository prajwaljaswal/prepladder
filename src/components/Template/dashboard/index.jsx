import React, { useEffect } from 'react';
import AddNewProject from '../../common/AddNewProject';
import TabView from '../Tab/Tab';
import jwt_decode from 'jwt-decode';

const Dashboard = () => {
  useEffect(() => {
    const token = jwt_decode(sessionStorage.getItem('token'));
    console.log(token, token.name);
  }, []);
  return (
    <div>
      <AddNewProject />
      <TabView />
    </div>
  );
};

export default Dashboard;
