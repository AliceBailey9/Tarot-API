const express = require("express");
const cardsRouter = require("./cardsRouter");

const apiRouter = express.Router();

apiRouter.use("/cards", cardsRouter);

module.exports = apiRouter;
