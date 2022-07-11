const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const signupSchema = new mongoose.Schema({
    firstname: {
    type: String,
  },
  surname: {
    type:String,
  },

  branch:{
    type:String,
  },
  role:{
    type:String,
  
  },

  email:{
    type:String,
    trim:true,

  },

  password:{
    type:String,
  
  },
  

});

// Export Model
signupSchema.plugin(passportLocalMongoose, { usernameField: "email" });
module.exports = mongoose.model("Signup", signupSchema);