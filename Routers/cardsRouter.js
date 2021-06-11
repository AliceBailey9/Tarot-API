const express = require("express");
const {
  getAllCards,
  getCard,
  getRandomCard,
} = require("../Controllers/cardController");

const cardsRouter = express.Router();

cardsRouter.get("/", getAllCards);
cardsRouter.get("/reading/:cardName", getCard);
cardsRouter.get("/reading", getRandomCard);

module.exports = cardsRouter;
