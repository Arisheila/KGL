const mongoose = require("mongoose");

const FarmSchema = new mongoose.Schema({
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
  
  pricetosold:{
    type:Number,
  
  },

comments:{
    type:String,
    trim:true,
},
   

});

// Export Model

module.exports = mongoose.model("Farm", FarmSchema);