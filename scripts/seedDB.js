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
    userName: "Calvin",
    List: [{
      _id: "randomcode",
      itemSchema: [{
        name: "Milk",
        quantity: "1",
        purchased: false
      },
      {
        name: "Cereal",
        quantity: "3",
        purchased: false
      },
      {
        name: "Ham",
        quantity: "2",
        purchased: false
      },
      {
        name: "Eggs",
        quantity: "100",
        purchased: false
      },
      {
        name: "Tofu",
        quantity: "1",
        purchased: false
      },
      {
        name: "Salad",
        quantity: "5",
        purchased: false
      },
    ]
    },
    {
      _id: "another-code",
      itemSchema: [{
        name: "Vodka",
        quantity: "2",
        purchased: false
      },
      {
        name: "Beers",
        quantity: "30",
        purchased: false
      }]
    }],

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