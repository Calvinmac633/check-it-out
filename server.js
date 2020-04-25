const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan')
const path = require("path");
const routes = require("./routes");
var session = require("express-session");
var passport = require("./config/passport");

const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("client/public"));
}
const GroceryDB = require("./server/db/models/index")

// Define API routes here
app.use(routes);

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

mongoose.Promise = global.Promise
let MONGO_URL
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/checkitout");


/* Express app ROUTING */
app.use('/auth', require('./server/auth'))

// ====== Error handler ====
app.use(function(err, req, res, next) {
	console.log('====== ERROR =======')
	console.error(err.stack)
	res.status(500)
})


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
