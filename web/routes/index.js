var express = require('express');
var router = express.Router();

var datos = require("../data/dataprovider");

router.get('/login', function(req, res) {
  res.render('login', { title: "Login" });
});

router.get('/contacto', function(req, res) {
  res.render('contacto', { title: "Contacto" });
});

router.get('/', function(req, res, next) {
  const peliculas = datos.getAllPeliculas(); 
  res.render('home', {title: "Inicio", peliculas: peliculas, pelicula: null});
});

router.get('/:id', (req, res) => {
  const peliculas = datos.getAllPeliculas();
  const pelicula = datos.getPeliculaById(parseInt(req.params.id));
  res.render('home', { title: "Detalles de Película", peliculas: peliculas, pelicula: pelicula });
});



module.exports = router;
