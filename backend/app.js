const express = require("express");
const app = express();

const errorMiddleWare = require("./middlewares/errors");

app.use(express.json());

//Import all routes
const products = require("./routes/product");

app.use("/api/v1", products);

app.use(errorMiddleWare);

module.exports = app;
