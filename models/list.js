const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
});

const List = mongoose.model("List", listSchema);

module.exports = List;