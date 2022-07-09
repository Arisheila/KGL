const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const CreditSchema = new mongoose.Schema({
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
  date:{
    type:Date,
  
  },
  nameofproduce:{
    type:String,
  
  },
  tonnage:{
    type:String,
  
  },
  dispatch:{
    type:String,
  
  },

});

// Export Model

module.exports = mongoose.model("Credit", CreditSchema);