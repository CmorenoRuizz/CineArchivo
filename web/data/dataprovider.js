var peliculas = require("./pelis.json");
var usuarios = require("./usuarios.json");

//Obtener todas las pelis
function getAllPeliculas() {
    return peliculas;
}

function getPeliculaById(id) {
    return peliculas.find(pelicula => pelicula.id === id);
}

module.exports = {
    getAllPeliculas,
    getPeliculaById    
}