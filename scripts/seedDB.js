const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/checkitout"
  //put in our DB
);

const seeds = [
  {
    _id: "User1",
    username: "hannali",
    password: "hannali123",
    lists:[
      {
        _id:"List1",
        codename: "Hello-World",
        listname: "Grocery List",
        items: [
          {
            _id: "item1",
            name: "pineapple",
            quantity: 1,
            purchased: false
          }
        ]
      }
    ]
  }
];

db.GroceryDB
  .deleteMany({})
  .then(() => db.GroceryDB.collection.insertMany(seeds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });