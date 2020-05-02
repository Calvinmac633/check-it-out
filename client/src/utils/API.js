import axios from "axios";
export default {
  // Gets list
  getList: function(codename) {
    return axios.get("/api/list/" + codename);
  },
  saveList: function(listData) {
    return axios.post("/api/list", listData)
  }

};