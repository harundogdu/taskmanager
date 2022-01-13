import axios from "axios";

export default axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
  },
  withCredentials: false,
});
