const Fournisseur = require("../Models/Fournisseur");
const addfournisseur =  async (req, res) => {
  try {
    const { Name, Article, phone, Facture } = req.body;
    const newfournisseur = new Fournisseur({
      ...req.body,
      Date: new Date(),

    });
    await newfournisseur.save(
      res.send({ msg: "fournisseur ajouter", newfournisseur })
    );
  } catch (error) {
    res.send({ msg: "non ajouter" });
  }
};
const getfournisseur = async (req, res) => {
    try {
      const ListeOffournisseur = await Fournisseur.find();
      res.send({ msg: "ce sont les fournisseurs", ListeOffournisseur });
    } catch (error) {
      res.send({ msg: "fournisseurs introuvables" });
    }
  };
  const getonefournisseur = async (req, res) => {
    try {
      const oneFournisseur = await Fournisseur.findOne({ _id: req.params._id });
      res.send({ msg: "one fournisseur", oneFournisseur });
    } catch (error) {
      res.send({ msg: "introuvables" });
    }
  };
  const deletefournisseur = async (req, res) => {
    try {
      const { _id } = req.params;
      await Fournisseur.findOneAndDelete({ _id });
      res.send({ msg: "fournisseur effacer " });
    } catch (error) {
      res.send({ msg: "not deleted" });
    }
  };
  const updatefournisseur = async (req, res) => {
    try {
        const { _id } = req.params;
        const fournisseurtoupdate=await  Fournisseur.updateOne(
            { _id },
            { $set: { ...req.body} }
    );
    res.send({ msg: "fournisseur uptodate", fournisseurtoupdate });


    } catch (error) {
        res.send({msg:'fournisseur not uptodate'})
    }
};
module.exports = controllers = {
    addfournisseur,
    getfournisseur,
    getonefournisseur,
    deletefournisseur,
    updatefournisseur,
  };