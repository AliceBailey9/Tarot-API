const {
  fetchAllCards,
  fetchCard,
  fetchRandomCard,
} = require("../Models/cardModel");

const getAllCards = (req, res) => {
  fetchAllCards((err, cards) => {
    if (err) console.log(err);
    else {
      res.status(200).send(cards);
    }
  });
};

const getCard = (req, res) => {
  const { cardName } = req.params;
  fetchCard(cardName, (err, card) => {
    if (err) console.log(err);
    else {
      res.status(200).send(card);
    }
  });
};

const getRandomCard = (req, res) => {
  fetchRandomCard((err, card) => {
    if (err) console.log(err);
    else {
      res.status(200).send(card);
    }
  });
};

module.exports = { getAllCards, getCard, getRandomCard };
