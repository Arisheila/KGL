const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const creditSchema = new mongoose.Schema({
    buyername: {
    type: String,
    trim:true,
  },
  nationalid: {
    type:String,
    trim:true,
  },

  location:{
    type:String,
    trim:true,
  },
  contact:{
    type:Number,
  
  },
  amountdue:{
    type:Number,

  },

  salesagent:{
    type:String,
    trim:true,
  
  },
  tonnage:{
    type:Number,
  
  },

  goods:{
    type:String,
    trim:true,
  },

  nameofproduce:{
    type:String,
  
  },

  date:{
    type:Date,
  
  },

  dispatch:{
    type:Date,
  
  },
  
  branch:{
    type:String,

  },
  
  
});

// Export Model

module.exports = mongoose.model("Credit", creditSchema);