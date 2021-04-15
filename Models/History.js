const mongoose = require("mongoose");
// create schema
const { Schema } = mongoose;
const HistorySchema = new Schema({
  Article: String,
  Fournisseur: String,
  Date: Date,

  Quantite: Number,
  Sortie: Number,
  Stock: Number,
  price: Number,
  Facture:Number,

});
module.exports = History= mongoose.model("History", HistorySchema);
