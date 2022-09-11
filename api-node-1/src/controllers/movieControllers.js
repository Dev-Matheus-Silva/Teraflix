const movies = require("../models/movies.json");

const getAll = (request,response) => {
    response.status(200).send(movies);
    };

const createMovie = (request,response) => {
//obejetivo criar um filme

// acessar a informação do filme através do body da requisição
const title = request.body.title;
const genero = request.body.genero;

console.log("body da requisição",
request.body)
//costruir o obejeto do nosso filme
//adicionar ele na lista
//enviar uma resposta
};

module.exports = {
    getAll,
    createMovie
};