import axios from "axios";

const apiRequest = axios.create({
    baseURL:"http://localhost:8008/api",
    withCredentials:true,
});

export default apiRequest;