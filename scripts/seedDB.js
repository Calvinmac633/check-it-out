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
       name: "Calvin",
       groceryList: [{
         _id: "randomcode",
         groceryListSchema: [{
           groceryListItem: "newnew test"
         },
        {
          groceryListItem: "testest"
        }]
       },
       {
        _id: "another-code",
        groceryListSchema: [{
          groceryListItem: "blahblah test"
        },
       {
         groceryListItem: "testest"
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

