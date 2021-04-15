const express = require("express");
const router = express.Router();
const History =require('../Models/History')
const Controllers=require("../Controllers/history")
router.get("/test", (req, res) => {
  res.send("hello world");
});

// afficher tous les produits
router.get("/", controllers.getHistory);

// delete product
router.delete("/:_id", controllers.deletehistory);




module.exports = router;
