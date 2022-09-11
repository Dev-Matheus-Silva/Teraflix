const express = require("express");
const router = express.Router();

const controller = require("../controllers/moviesControllers");

// Mensagem genérica
router.get("/", controller.home);

// DEMANDA: visualizar todas os filmes
router.get("/all", controller.getAll)

// DEMANDA: visualizar todos os filmes da api do ghlibi
router.get("/all/ghlibi", controller.getAllGhlibiMovies)

// DEMANDA: cadastrar um filme
router.post("/create", controller.createMoovie);

// DEMANDA: atualizar um filme
router.patch("/updateTitle/:id", controller.updateMoovieById);

// DEMANDA: excluir um filme
router.delete("/delete/:id", controller.deleteMoovieById);


module.exports = router;