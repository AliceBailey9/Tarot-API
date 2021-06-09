const express = require("express");
const { getAllCards } = require("../Controllers/cardController");

const cardsRouter = express.Router();

cardsRouter.get("/", getAllCards);

module.exports = cardsRouter;
