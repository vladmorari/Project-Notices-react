import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://notice-deploy-fw.herokuapp.com/", //  http://localhost:8000/
  timeout: 9000,
});
export default axiosInstance;
