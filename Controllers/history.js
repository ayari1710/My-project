const History = require("../Models/History");



const getHistory = async (req, res) => {
    try {
      const Historique = await History.find();
      res.send({ msg: "c est l historique", Historique });
    } catch (error) {
      res.send({ msg: "historique introuvables" });
    }
  };

  const deletehistory = async (req, res) => {
    try {
      const { _id } = req.params;
      await History.findOneAndDelete({ _id });
      res.send({ msg: "historique effacer " });
    } catch (error) {
      res.send({ msg: "not deleted" });
    }
  };

  module.exports = controllers = {
    getHistory,
    deletehistory
   
  };