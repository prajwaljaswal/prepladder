import axios from "axios";

 export default axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
 });

//  instance.interceptors.request.use((config) => {
//     config.headers = { ...config.headers, Authorization: `Bearer ${"token"}` };
  
//     return config;
//   });
  