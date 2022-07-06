const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const SalesSchema = new mongoose.Schema({
    producename: {
    type: String,
  },
  tonnage: {
    type:String,
  },

  amountpaid:{
    type:String,
  },
  buyername:{
    type: String,
  
  },

  agentsname:{
    type: String,

  },

  dateandtime:{
    type:Date,
  
  },





});

// Export Model

module.exports = mongoose.model("Sales", SalesSchema);