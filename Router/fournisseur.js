const express = require("express");
const router = express.Router();
const Fournisseur =require('../Models/Fournisseur')
const Controllers=require("../Controllers/fournisseur")
router.get("/test", (req, res) => {
  res.send("hello world");
});
// post product
router.post("/", controllers.addfournisseur);
// afficher tous les produits
router.get("/", controllers.getfournisseur);
// afficher un seul produit
router.get("/:_id", controllers.getonefournisseur,
);
// delete product
router.delete("/:_id", controllers.deletefournisseur);
// edit product
router.put("/:_id", controllers.updatefournisseur);



module.exports = router;
