const mongoose = require("mongoose");
const db = require("../models");
// This file empties the Books collection and inserts the books below
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/checkitout"
  //put in our DB
);

const userSeed = [
  {
    name: "Calvin",
    groceryLists: groceryListSchema[] = [
      groceryItem: ["milk"
    ]
    
  }
}
  db.UserDB
  .remove({})
  .then(() => db.UserDB.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });