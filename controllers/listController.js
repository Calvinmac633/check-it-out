const db = require("../models");
const { makeCodename } = require('./utils');
// Defining methods for the booksController

module.exports = {
  create: function (req, res) {
    db.GroceryDB
      .create({ listname: req.params.listname, codename: makeCodename() })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


  findOne: function (req, res) {
    console.log("This is req.params -->", req.params)
    db.GroceryDB
      .findOne({ codename: req.params.codename })
      .then(dbModel => {
        console.log("This is dbModel ---> ", dbModel)
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },


  findOneAndUpdate: function (req, res) {
    console.log("This is req.params -->", req.params)
    console.log("This is req.body -->", req.body)
    db.GroceryDB

    .findOneAndUpdate(
      { codename: req.params.codename },
      {
        $push: {
          items: 
            { itemName: req.body.itemName }
        }
      }, 
      {new: true}

      )
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)
      })
      .catch(err => {
        console.log(err)
        res.status(422).json(err)
      });
  },

  remove: function(req, res) {
    console.log("THIS IS REQ.PARAMS --->",req.params)
    db.GroceryDB
    .findOneAndUpdate(
      { codename: req.params.codename },
      {
        $pull: { items: {_id: req.params.id } }
      }, 
      console.log()
      )

      // .populate("grocerydbs")
      // .then(dbModel => dbModel.remove())
      .then(dbModel => {
        console.log("DELETE BUTTON DBMODEL",dbModel)
        res.json(dbModel)})
      .catch(err => {
        console.log(err)
        res.status(422).json(err)});
  },
};
