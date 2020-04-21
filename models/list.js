// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const listSchema = new Schema({
//     _id: Schema.Types.ObjectId,
//     title: {
//         type: String,
//         required: true,
//         validate: {
//             validator: function (text) {
//                 return text.legnth > 0;
//             },
//             message: "empty title is not allowed"
//         }
//     },
//     items: [],
//     user: {
//         required: true,
//         type: Schema.Types.ObjectId,
//         ref: "UserDB"
//     }
// });

// const ListDB = mongoose.model("ListDB", listSchema);

// module.exports = ListDB;