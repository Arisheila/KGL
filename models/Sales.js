const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const salesSchema = new mongoose.Schema({
    producename: {
    type: String,
  },
  branch:{
    type:String,
  },

  amountpaid:{
    type:String,
  },

  buyername:{
    type: String,
  
  },
  dateandtime:{
    type:Date,
  
  },

  tonnage: {
    type:String,
  },

  

  agentsname:{
    type: String,

  },




});

// Export Model

module.exports = mongoose.model("Sale", salesSchema);