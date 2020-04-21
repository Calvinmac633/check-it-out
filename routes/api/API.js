import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("https://api.spoonacular.com/food/ingredients/autocomplete?query=appl&number=5");
  }
};
