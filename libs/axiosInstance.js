import axios from "axios";

// Exporting a function that creates and configures Axios instance
export function createAxiosInstance() {
  return axios.create({
    withCredentials: true,
    baseURL: "http://api-dev.beezlinq.com/api/v1",
  });
}
