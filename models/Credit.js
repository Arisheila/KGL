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
  amountdue:{
    type:Number,

  },

  salesagent:{
    type:String,
  
  },
  tonnage:{
    type:Number,
  
  },
  nameofproduce:{
    type:String,
  
  },

  goods:{
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