const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const router = require("../router/medicion.router");

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1", router);


module.exports = app;
