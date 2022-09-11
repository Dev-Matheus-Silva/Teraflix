const movies = require("../models/movies.json");

const getAll = (request,response) => {
    response.status(200).send(movies);
    };

const createMovie = (request,response) => {
//obejetivo criar um filme

// acessar a informação do filme através do body da requisição
const title = request.body.title;
const genero = request.body.genero;



//costruir o obejeto do nosso filme

let newMovie ={
    "id": Math.random().toString(32).substring(2 ,6),
        "addedAt": new Date(),
        "title": title,
        "genrero": genero
}

console.log("novo filme",newMovie)

//adicionar ele na lista
//enviar uma resposta
};

module.exports = {
    getAll,
    createMovie
};