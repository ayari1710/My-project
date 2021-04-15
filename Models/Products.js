const mongoose = require("mongoose");
// create schema
const { Schema } = mongoose;
const ProductSchema = new Schema({
  Article: String,
  Fournisseur: String,
  Date: Date,

  Quantite: Number,
  Sortie: Number,
  Stock: Number,
  price: Number,
  Facture:Number,
  
});
module.exports = Product = mongoose.model("product", ProductSchema);
