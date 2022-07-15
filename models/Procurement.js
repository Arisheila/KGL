const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const ProcurementSchema = new mongoose.Schema({
  nameofProduce: {
    type: String,
  },

  branch:{
    type:String,
  
  },

  date:{
    type:Date,
  },

  tonnage:{
    type:Number,
  
  },
  thecost:{
    type:Number,

  },

  nameofthedealer:{
    type:String,
  },

  pricetosold:{
    type:Number,
  
  },

  contact:{
    type:Number,
  },

  goods: {
    type:String,
  },

  
 

  cost:{
    type:Number,

  },

  nameofthedealer:{
    type:String,
  
  },
  
  



});

// Export Model

module.exports = mongoose.model("Purchases", ProcurementSchema);