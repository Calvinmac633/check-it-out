import axios from "axios";
export default {
  // Gets list
  getList: function(codename) {
    console.log(codename)
    return axios.get("/api/list/" + codename);
  },
  addItem: function(codename, listData) {
    console.log(codename)
    return axios.put("/api/list/" + codename, listData)
  },
  nodeMailer: function(codename, listData) {
    console.log(codename)
    return axios.put("/api/list/" + codename, listData)
  }
  // addItem: function(listData) {
  //   // console.log(listData)
  //   return axios.put("/api/List/", listData)
  // }

};