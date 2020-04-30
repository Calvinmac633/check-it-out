import axios from "axios";

export default {
  // Gets list
  getLists: function() {
    return axios.get("/api/List");
  },
   // Saves a book to the database
  saveList: function(listData) {
    return axios.post("/api/List", listData)
  },
    // Gets the book with the given id
    getList: function(id) {
      return axios.get("/api/List/" + id);
    },
    // // Deletes the book with the given id
    // deleteList: function(id) {
    //   return axios.delete("/api/List/" + id);
    // }
};