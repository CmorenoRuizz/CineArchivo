const express = require('express');
const router = express.Router();
const datos = require("../data/dataprovider");

// Ruta para login
router.get('/login', function(req, res) {
  res.render('login', { title: "Login"});
});

router.post('/login', function(req, res) {
  const { usuario, contrasenya } = req.body; // Obtener datos del formulario
  const user = datos.getUserByCredentials(usuario, contrasenya); // Validar credenciales

  if (user) {
    req.session.user = user; // Almacenar información del usuario en la sesión
    res.redirect('/user'); // Redirigir a la página protegida
  } else {
    res.render('login', { title: "Login", error: "Usuario o contraseña incorrectos" });
  }
});

// Middleware para verificar autenticación
function isAuthenticated(req, res, next) {
  if (req.session.user) {
    return next();
  }
  res.redirect('/login'); // Redirige al login si no hay sesión activa
}


// Página principal (pública)
router.get('/', function(req, res) {
  const peliculas = datos.getAllPeliculas(); 
  res.render('home', { title: "Inicio", peliculas: peliculas, pelicula: null });
});

// Página protegida para usuarios autenticados
router.get('/user', isAuthenticated, function(req, res) {
  res.render('user', { title: "Inicio para Usuarios", user: req.session.user });
});

// Ruta para mostrar detalles de película (protegida)
router.get('user/:id', isAuthenticated, function(req, res) {
  const peliculas = datos.getAllPeliculas();
  const pelicula = datos.getPeliculaById(parseInt(req.params.id));
  res.render('user', { title: "Detalles de Película", peliculas: peliculas, pelicula, user: req.session.user });
});

// Ruta de contacto
router.get('/contacto', function(req, res) {
  res.render('contacto', { title: "Contacto", user: req.session.user });
});

// Logout (destruir la sesión)
router.get('/logout', function (req, res) {
  console.log('Intentando destruir la sesión...');
  req.session.destroy(function (err) {
    if (err) {
      console.error('Error al destruir la sesión:', err);
      return res.status(500).send('No se pudo cerrar sesión');
    }
    res.redirect('/login'); 
  });
});

module.exports = router;
