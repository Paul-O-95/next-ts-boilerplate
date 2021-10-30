import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "", //Enter Base url here
  headers: { ContentType: "application/json" },
});
export { AxiosInstance };
