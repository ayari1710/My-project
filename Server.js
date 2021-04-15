// require
const express = require("express");
require("dotenv").config();
const connectDB = require("./config/connectDB");
// instance app
const app = express();
// connection db
connectDB();
// middleware globale
app.use(express.json());
// middleware route
app.use("/api/user", require("./Router/user"));
app.use("/api/produit",require('./Router/product'));
app.use("/api/fournisseur",require('./Router/fournisseur'));
app.use("/api/historique",require('./Router/history'));
app.use("/api/contact",require('./Router/contact'));


// Port
const PORT = process.env.PORT;

// create server
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`server is running on ${PORT}`)
);
