import axios from "axios";

export default axios.create({
  baseURL: "https://t-cit-api-production.up.railway.app/api/v1",
  headers: {
    "Content-type": "application/json"
  }
});