const mongoose = require("mongoose");
// create schema
const { Schema } = mongoose;
const FournisseurSchema = new Schema({
  Name:  String,
  Article:String,
  phone:Number,
  Date: Date,
Facture:String


});
module.exports = Fournisseur= mongoose.model("fournisseur", FournisseurSchema);
