const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const listSchema = new Schema({
    codename: String,
    listname: String,
    items: [
        {
            _id: { type: Schema.ObjectId, auto: true }, // --> THIS IS NOT WORKING
            name: String,
            quantity: Number,
            purchased: Boolean
        }
    ]
    //reference to User?    
});
const GroceryDB = mongoose.model("GroceryDB", listSchema);
module.exports = GroceryDB;