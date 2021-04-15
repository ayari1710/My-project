// mongoose
const mongoose = require("mongoose");

// schema
const { Schema, model } = mongoose;

// creation schema
const ContactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
 
  message:String,
  phone: Number,
  
});

// export to the database model
module.exports = Contact = model("contact", ContactSchema);
