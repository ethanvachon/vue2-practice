import Axios from "axios";
export const api = Axios.create({
  baseURL: "https://localhost:5001/",
  timeout: 3000,
});
