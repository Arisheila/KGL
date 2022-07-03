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