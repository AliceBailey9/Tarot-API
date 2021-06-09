const { fetchAllCards } = require("../Models/cardModel");

const getAllCards = (req, res) => {
  fetchAllCards((err, cards) => {
    if (err) console.log(err);
    else {
      res.status(200).send(cards);
    }
  });
};

module.exports = { getAllCards };
