var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const session = require('express-session'); // Requiere express-session solo una vez

var indexRouter = require('./routes/index');

var app = express();

// Configuración de la vista
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de la sesión
app.use(session({
  secret: '65324534562624523453455', // Cambia a una clave única y segura
  saveUninitialized: true,
  resave: false, // Es preferible usar `false` para evitar guardar sesiones sin cambios
  cookie: { secure: false } // Cambia a `true` si usas HTTPS
}));

// Rutas
app.use('/', indexRouter);

// Manejo de errores
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});




module.exports = app;
