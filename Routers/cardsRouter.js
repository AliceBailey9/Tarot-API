const express = require("express");
const { getAllCards, getCard } = require("../Controllers/cardController");

const cardsRouter = express.Router();

cardsRouter.get("/", getAllCards);
cardsRouter.get("/:cardName", getCard);

module.exports = cardsRouter;
