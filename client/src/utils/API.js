import axios from "axios";
export default {
  // Gets list
  getList: function() {
    return axios.get("/api/List");
  }
};