const express = require("express");
const apiRouter = require("./Routers/apiRouter");
const cors = require("cors");

app.use(cors());
app.use(express.json());
const app = express();

app.use("/api", apiRouter);

module.exports = { app };
