import axios from "axios";

export default {
  // Gets list
  createList: function (listname) {
    return axios.post('/api/list/' + listname);
  },
  getList: function (codename) {
    console.log(codename)
    return axios.get("/api/list/" + codename);
  },
  addItem: function (codename, listData) {
    console.log(codename)
    return axios.put("/api/list/" + codename, listData)
  },
  deleteList: function(codename, id) {
    console.log("This is codename",codename)
    console.log("This is id",id)
    return axios.put("/api/list/" + codename + "/" + id);
  }
  //Looks like the issue is here -> the API URL is not properly formatting, puts ID first, and codename as undefined




  // deleteList: function(id) {
  //   return axios.delete("/api/List/" + id);
  // }

  // addItem: function(listData) {
  //   // console.log(listData)
  //   return axios.put("/api/List/", listData)
  // }

};