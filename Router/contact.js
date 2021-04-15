const express = require("express");
const router = express.Router();
const Contact =require('../Models/Contact')
const Controllers=require("../Controllers/contact")
router.get("/test", (req, res) => {
  res.send("hello world");
});
// post product
router.post("/", controllers.addcontact);
// afficher tous les produits
router.get("/", controllers.getcontacts);




module.exports = router;
