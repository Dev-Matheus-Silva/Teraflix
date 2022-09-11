//FUNÇÃO DO ARQUIVO: ARMAZENAR AS PRINCIPAIS IMPORTAÇÕES E INFORMAÇÕES DA APLICAÇÃO

const express = require("express");
const app = express();

const CORS = require("cors");
app.use(CORS());

// ROTAS DO NOSSO PROJETO

const movies = require("./routes/moviesRoutes");

// DEFINIR A ROTA PRINCIPAL
app.use("/movies",movies)

module.exports = app;
