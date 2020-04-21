const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model("Glist", Schema({
    _id: Schema.Types.ObjectId,
    title: String,
    quantity: Number,
    user: {
        require: true,
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}));