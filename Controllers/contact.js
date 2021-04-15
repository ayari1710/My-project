const Contact = require("../Models/Contact");
const addcontact =  async (req, res) => {
  try {
    const { Name, email, phone ,message} = req.body;
    const newContact = new Contact({
      ...req.body,
      Date: new Date(),

    });
    await newContact.save(
      res.send({ msg: "contact ajouter", newContact })
    );
  } catch (error) {
    res.send({ msg: "non ajouter" });
  }
};
const getcontacts = async (req, res) => {
    try {
      const ListeOfContact= await Fournisseur.find();
      res.send({ msg: "ce sont les contacts", ListeOfContact });
    } catch (error) {
      res.send({ msg: "contacts introuvables" });
    }
  };
 
 
module.exports = controllers = {
    addcontact,
    getcontacts,
    
  };