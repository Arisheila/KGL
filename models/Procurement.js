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
    trim:true,
  },

  pricetosold:{
    type:Number,
  
  },

  contact:{
    type:Number,
  },

  goods: {
    type:String,
    trim:true,
  },
   

});

// Export Model

module.exports = mongoose.model("Purchase", ProcurementSchema);