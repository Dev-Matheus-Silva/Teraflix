//FUNÇÃO DO ARQUIVO: ARMAZENAR AS PRINCIPAIS IMPORTAÇÕES E INFORMAÇÕES DA APLICAÇÃO

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

// ROTAS DO NOSSO PROJETO
app.use(express.json());

// DEFINIR A ROTA PRINCIPAL
app.use("/movies", movies);

module.exports = app;