const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const itemSchema = new Schema({
//     _id: { type: Schema.ObjectId, auto: true },
//     name: String,
//     quantity: Number,
//     purchased: Boolean
// })
const listSchema = new Schema({
    codename: String,
    listname: String,
    items: [
        {
            name: String,
            quantity: Number,
            purchased: Boolean
        }
    ]
    //reference to User    
});

const GroceryDB = mongoose.model("GroceryDB", listSchema);
module.exports = GroceryDB;