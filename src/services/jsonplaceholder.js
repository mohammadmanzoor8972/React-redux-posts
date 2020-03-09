import axios from "axios";

//Default
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});
