const express = require('express');
const  path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
require('dotenv').config();


// Express Session
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
});



















// Database
const config = require('./config/database');

//Initialising server, the variable server can be named anything and be used like that throughout the calling in the routes file 
const app = express();

// Mongoose Set up
//connect mongoose
mongoose.connect(config.database, { useNewUrlParser: true });
const db = mongoose.connection;
// Check connection
db.once('open', function () {
  console.log('Connected to MongoDB');
});
// Check for db errors
db.on('error', function (err) {
  console.error(err);
});

// Setting view Engine.
app.set('view engine', 'pug');
app.set('views', './views');

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession);

app.use(passport.initialize());
app.use(passport.session());


