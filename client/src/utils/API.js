import axios from "axios";
export default {
  // Gets list
  getList: function(codename) {
    console.log(codename)
    return axios.get("/api/List/" + codename);
  },
  // saveList: function(listData) {
  //   return axios.post("/api/List", listData)
  // }

};