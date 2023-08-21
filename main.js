const path = require('path');

const express = require('express');

const app = express();

app.use(express.static('public'))

app.get('/', function(req, res) {

    res.sendFile(path.join(__dirname + '/public/login.html'));

})

app.get('/home.html', function(req, res) {

    res.sendFile(path.join(__dirname + '/public/home.html'));

})

app.get('/horario.html', function(req, res) {

    res.sendFile(path.join(__dirname + '/public/horario.html'));

})

app.get('/notas.html', function(req, res) {

    res.sendFile(path.join(__dirname + '/public/notas.html'));

})

app.get('/cursos.html', function(req, res) {

    res.sendFile(path.join(__dirname + '/public/cursos.html'));

})
app.get('/pruebas.html', function(req, res) {

    res.sendFile(path.join(__dirname + '/public/pruebas.html'));

})

app.listen(3005);

console.log('El servidor se esta ejecutando en url: http://localhost:3005');