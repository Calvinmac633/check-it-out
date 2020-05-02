import axios from "axios";

export default {
  // Gets list
  getLists: function() {
    return axios.get("/api/lists");
  },
   // Gets the book with the given id
   getLists: function(id) {
    return axios.get("/api/lists/" + id);
  },
  // Deletes the book with the given id
  deleteItem: function(id) {
    return axios.delete("/api/lists/" + id);
  },
  // Saves a book to the database
  saveItem: function(listData) {
    return axios.post("/api/lists", listData);
  },
  // Gets all autosearch
  getAutosearch: function() {
  return axios.get("https://api.spoonacular.com/food/ingredients/autocomplete");
    }
};