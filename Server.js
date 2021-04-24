// require
const express = require("express");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const path=require('path');
// instance app
const app = express();
// connection db
connectDB();
// middleware globale
app.use(express.json());
// middleware route
app.use("/api/user", require("./Router/user"));
app.use("/api/produit", require("./Router/product"));
app.use("/api/fournisseur", require("./Router/fournisseur"));
app.use("/api/historique", require("./Router/history"));
app.use("/api/contact", require("./Router/contact"));

// serve static assets if in production 
if(process.env.NODE_ENV==='production'){
  // set static folder
  app.use(express.static('Client/build'));
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'mon-app','build','index.html'))
  })
}

// Port
const PORT = process.env.PORT;

// create server
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`server is running on ${PORT}`)
);
