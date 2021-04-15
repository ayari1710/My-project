const Product = require("../Models/Products");
const History = require("../Models/History");
const addproduts = async (req, res) => {
  try {
    const {
      Article,
      Fournisseur,
      Quantite,
      Sortie,
      Stock,
      price,
      Facture,
    } = req.body;

    const resulat = req.body.Quantite - req.body.Sortie;
   
    const newproduct = new Product({
      ...req.body,
      Date: new Date(),
      Stock: resulat,
    });

    await newproduct.save();
    res.send({ msg: "produit ajouter", newproduct });
  } catch (error) {
    console.log(error);
    res.send({ msg: "produit non ajouter" }, error);
  }
};

const getproducts = async (req, res) => {
  try {
    const ListeOfproduct = await Product.find();
    res.send({ msg: "ce sont les produits", ListeOfproduct });
  } catch (error) {
    res.send({ msg: "produits introuvables" });
  }
};
const getoneproduct = async (req, res) => {
  try {
    const oneProduct = await Product.findOne({ _id: req.params._id });
    res.send({ msg: "one product", oneProduct });
  } catch (error) {
    res.send({ msg: "introuvables" });
  }
};
const deleteproduct = async (req, res) => {
  try {
    const { _id } = req.params;
    await Product.findOneAndDelete({ _id });
    res.send({ msg: "produit effacer " });
  } catch (error) {
    res.send({ msg: "not deleted" });
  }
};
const updateproduct = async (req, res) => {
  try {
    const { _id } = req.params;
    const resulat = req.body.Quantite - req.body.Sortie;

   
    const oldProduct = await Product.findById({ _id });
    

    
    const history = new History({
      Date: new Date(),
      Article: oldProduct.Article, 
      Fournisseur: oldProduct.Fournisseur,
      Quantite: oldProduct.Quantite,
      Sortie: oldProduct.Sortie,
      Stock: oldProduct.Stock,
      Facture: oldProduct.Facture,
      price: oldProduct.price,
    });
    await history.save();
    const contactUpdate = await Product.updateOne(
      { _id },
      { $set: { ...req.body, Stock: resulat } }
    );
    res.send({ msg: "client uptodate", contactUpdate, history });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

module.exports = controllers = {
  addproduts,
  getproducts,
  getoneproduct,
  deleteproduct,
  updateproduct,
};
