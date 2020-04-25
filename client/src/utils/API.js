import axios from "axios";
export default {
  // Gets list
  getList: function() {
    return axios.get("/api/List");
  },
  saveList: function(listData) {
    return axios.post("/api/List", listData)
  }

};