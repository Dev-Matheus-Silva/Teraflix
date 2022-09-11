const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

// importar as rotas
const movies = require("./routes/moviesRoutes");

// definir rota padrão
app.use("/movies", movies);

module.exports = app;