const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const ProcurementSchema = new mongoose.Schema({
  nameofProduce: {
    type: String,
  },
  goods: {
    type:String,
  },

  date:{
    type:Date,
  },
  tonnage:{
    type:Number,
  
  },

  cost:{
    type:Number,

  },

  nameofthedealer:{
    type:String,
  
  },
  branch:{
    type:String,
  
  },
  pricetosold:{
    type:Number,
  
  },



});

// Export Model

module.exports = mongoose.model("Purchases", ProcurementSchema);