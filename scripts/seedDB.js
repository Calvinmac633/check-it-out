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
    codename: "Turtle-Apple",
    listname: "Food List",
    items: [{
      name: "Cereal",
      quantity: 3,
      purchased: false
    },
    {
      name: "Milk",
      quantity: 3,
      purchased: false
    }]
  },
  {
    codename: "Cat-Banana",
    listname: "Grocery List",
    items: [{
      name: "Yogurt",
      quantity: 200,
      purchased: false
    }]
  }
]
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