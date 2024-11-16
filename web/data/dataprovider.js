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

// Obtener películas de un usuario por su ID
function getPeliculasByUser(userId) {
    const user = usuarios.find(usuario => usuario.id === userId);
    if (!user) return [];
    return user.copies.map(copy => peliculas.find(pelicula => pelicula.id === copy.id_movie));
  }

module.exports = {
  getAllPeliculas,
  getPeliculaById,
  getUserByCredentials,
  getPeliculasByUser
};
