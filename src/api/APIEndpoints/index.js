import axios from '../instance';

axios.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

export const GET_PROJECT_NAME = (pageIndex, pageSize) =>
  axios.get(`api/MasterData/GetProjectName?pageIndex=${pageIndex}&pageSize=${pageSize}`).then((response) => {
    return response;
  });

export const ADD_PROJECT_NAME = (body) =>
  axios.post('api/MasterData/InsUpdProjectName', body).then((response) => {
    return response;
  });

export const DELETE_PROJECT_NAME = (body) =>
  axios.delete(`api/MasterData/projectNameId?projectNameId= ${body}`).then((response) => {
    return response;
  });

export const GET_PROJECT_STATUS = (pageIndex, pageSize) =>
  axios.get(`api/MasterData/GetProjectStatus?pageIndex=${pageIndex}&pageSize=${pageSize}`).then((response) => {
    return response;
  });

export const ADD_PROJECT_STATUS = (data) =>
  axios.post('api/MasterData/InsUpdProjectStatus', data).then((response) => {
    return response;
  });

export const DELETE_PROJECT_STATUS = (data) =>
  axios.delete(`api/MasterData/projectStatusId?projectStatusId= ${data}`).then((response) => {
    return response;
  });

export const GET_PROJECT_TYPE = (pageIndex, pageSize) =>
  axios.get(`api/MasterData/GetProjectType?pageIndex=${pageIndex}&pageSize=${pageSize}`).then((response) => {
    return response;
  });
export const ADD_PROJECT_TYPE = (body) =>
  axios.post('api/MasterData/InsUpdProjectType', body).then((response) => {
    return response;
  });

export const DELETE_PROJECT_TYPE = (data) =>
  axios.delete(`api/MasterData/projectTypeId?projectTypeId= ${data}`).then((response) => {
    return response;
  });
export const ADD_PROJECT_DOMAIN = (body) =>
  axios.post('api/MasterData/InsUpdProjectDomain', body).then((response) => {
    return response;
  });

export const GET_PROJECT_DOMAIN = (pageIndex, pageSize) =>
  axios.get(`api/MasterData/GetProjectDomain?pageIndex=${pageIndex}&pageSize=${pageSize}`).then((response) => {
    return response;
  });
export const DELETE_PROJECT_DOMAIN = (data) =>
  axios.delete(`api/MasterData/ProjectDomainId?projectDomainId=${data}`).then((response) => {
    return response;
  });

export const GET_TECH_DEPARTMENT = (pageIndex, pageSize) =>
  axios.get(`api/MasterData/GetTechDepartment?pageIndex=${pageIndex}&pageSize=${pageSize}`).then((response) => {
    return response;
  });

export const ADD_TECH_DEPARTMENT = (body) =>
  axios.post('api/MasterData/InsUpdTechDepartment', body).then((response) => {
    return response;
  });

export const DELETE_TECH_DEPARTMENT = (data) =>
  axios.delete(`api/MasterData/techDepartId?techDepartId= ${data}`).then((response) => {
    return response;
  });

export const GET_CURRENCY = (pageIndex, pageSize) =>
  axios.get(`api/MasterData/GetCurrency?pageIndex=${pageIndex}&pageSize=${pageSize}`).then((response) => {
    return response;
  });

export const ADD_CURRENCY = (body) =>
  axios.post(`api/MasterData/InsUpdCurrency`, body).then((response) => {
    return response;
  });

export const DELETE_CURRENCY = (id) =>
  axios.delete(`api/MasterData/currencyId?currencyId=${id}`).then((response) => {
    return response;
  });

export const GET_TECH_STACK = (pageIndex, pageSize) =>
  axios.get(`api/MasterData/GetTechStack?pageIndex=${pageIndex}&pageSize=${pageSize}`).then((response) => {
    return response;
  });

export const ADD_TECH_STACK = (body) =>
  axios.post(`api/MasterData/InsUpdTechStack`, body).then((response) => {
    return response;
  });

export const GET_TECH_STACK_BY_ID = (id) =>
  axios.get(`api/MasterData/GetTechStackById?id=${id}`).then((response) => {
    return response;
  });
export const DELETE_TECH_STACK = (id) =>
  axios.delete(`api/MasterData/techStackId?techStackId=${id}`).then((response) => {
    return response;
  });

export const ADD_CLIENT_DETAILS = (body) =>
  axios.post(`api/Project/InsUpdClientDetail`, body).then((response) => {
    return response;
  });

export const GET_COMMUNICATION_MODE = (id) =>
  axios.get(`api/MasterData/GetCommunicationMode`).then((response) => {
    return response;
  });

export const ADD_GENERAL_INFO = (body) =>
  axios.post(`api/Project/InsUpdGeneralDetail`, body).then((response) => {
    return response;
  });

export const ADD_MEETINGS_DETAILS = (body) =>
  axios.post(`api/Project/InsUpdMeetings`, body).then((response) => {
    return response;
  });
