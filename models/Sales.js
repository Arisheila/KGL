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
    type:Number,
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

  tonnage: {
    type:Number,
  },
  


});

// Export Model

module.exports = mongoose.model("Sale", salesSchema);