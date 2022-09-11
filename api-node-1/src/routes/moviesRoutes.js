const express = require("express");
const router = express.Router();

const controllers = require("../controllers/movieControllers");

//demanda: ver todos os filmes disponiveis
router.get("/all", controllers.getAll)
router.post("/criate",controllers.createMovie);

module.exports = router;