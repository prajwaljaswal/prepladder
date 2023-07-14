import React from 'react';

const DashboardTitle = ({ title, className }) => {
  return <div className={`details ${className}`}>{title}</div>;
};

export default DashboardTitle;
