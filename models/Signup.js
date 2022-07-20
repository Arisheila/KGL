const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const signupSchema = new mongoose.Schema({
    firstname: {
    type: String,
    trim:true,
  },
  surname: {
    type:String,
    trim:true,
  },

  branch:{
    type:String,
  },
  role:{
    type:String,
  
  },

  email:{
    type:String,
    required:true,
    unique:true,
    trim:true,

  },

  password:{
    type:String,
    trim:true,
  
  },
  

});

// Export Model
signupSchema.plugin(passportLocalMongoose, { usernameField: "email" });
module.exports = mongoose.model("Signup", signupSchema);