const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    name: String,
    quantity: Number,
    purchased: Boolean
})

const userSchema = new Schema({
    userName: String,
    List: [
        itemSchema 
    ]                  
});


const GroceryDB = mongoose.model("GroceryDB", userSchema);

module.exports = GroceryDB;