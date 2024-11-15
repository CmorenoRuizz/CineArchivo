var peliculas = require("./pelis.json");
var usuarios = require("./usuarios.json");

// Obtener todas las películas
function getAllPeliculas() {
  return peliculas;
}

// Obtener película por ID
function getPeliculaById(id) {
  return peliculas.find(pelicula => pelicula.id === id);
}

// Validar usuario por credenciales
function getUserByCredentials(name, password) {
  return usuarios.find(user => user.name === name && user.password === password);
}

module.exports = {
  getAllPeliculas,
  getPeliculaById,
  getUserByCredentials
};
