import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/",//https://notice-deploy-fw.herokuapp.com/
  timeout: 9000,
});
export default axiosInstance;