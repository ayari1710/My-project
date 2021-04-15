const express = require("express");
const router = express.Router();
const Product =require('../Models/Products')
const Controllers=require("../Controllers/products")
router.get("/test", (req, res) => {
  res.send("hello world");
});
// post product
router.post("/", controllers.addproduts);
// afficher tous les produits
router.get("/", controllers.getproducts);
// afficher un seul produit
router.get("/:_id", controllers.getoneproduct);
// delete product
router.delete("/:_id", controllers.deleteproduct);
// edit product
router.put("/:_id", controllers.updateproduct);



module.exports = router;
