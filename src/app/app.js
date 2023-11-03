const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const router = require("../router/medicion.router");
// const router2 = require("../router/investigacion.router")

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1", router);
// app.use("/api/v2", router2)

module.exports = app;
