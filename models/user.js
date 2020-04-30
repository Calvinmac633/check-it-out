const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    name: String,
    quantity: Number,
    purchased: Boolean
})

const listSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    codename: String,
    listname: String,
    items: [
        itemSchema
    ]                  
});

const userSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    username: String,
    password: String,
    lists: [
        listSchema
    ]                  
});

const GroceryDB = mongoose.model("GroceryDB", userSchema);

module.exports = GroceryDB;