const movies = require("../models/movies.json");

const getAll = (request,response) => {
    response.status(200).send(movies);
    };


module.exports = {
    getAll
};