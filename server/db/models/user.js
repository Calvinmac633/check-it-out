const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groceryListSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    groceryListItem: String
})

const userSchema = new Schema({
    name: String,
    groceryList: [
        groceryListSchema 
    ]                  
});


const GroceryDB = mongoose.model("GroceryDB", userSchema);

module.exports = GroceryDB;