const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const creditSchema = new mongoose.Schema({
    buyername: {
    type: String,
  },
  nationalid: {
    type:String,
  },

  location:{
    type:String,
  },
  contact:{
    type:Number,
  
  },
  salesagent:{
    type:String,
  
  },
  amountdue:{
    type:Number,

  },

  dispatch:{
    type:String,
  
  },
  
  date:{
    type:Date,
  
  },
  goods:{
    type:String,
  },

  nameofproduce:{
    type:String,
  
  },
  branch:{
    type:String,

  },
  tonnage:{
    type:String,
  
  },
  
});

// Export Model

module.exports = mongoose.model("Credit", creditSchema);