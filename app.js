
require('dotenv').config();
const express = require('express')
var hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');//Esta línea le dice a Express que el motor de plantillas (view engine) que vas a usar es Handlebars (abreviado como hbs).
hbs.registerPartials(__dirname + '/views/partials');

//Servidor contenido estatico
app.use( express.static('public'));

//define una ruta HTTP GET para la URL raíz / en una aplicación web usando Express.js
app.get('/', (req, res) => {//req (request o solicitud del cliente) y res (response o respuesta que le enviarás).
    res.render('home',{//Esto renderiza (genera) una vista llamada home, usando un motor de plantillas (como Handlebars, etc.).
        nombre: 'Banda Nemecio',
        titulo: 'Curso de Node'
    })
});

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Banda Nemecio',
        titulo: 'Curso de Node'
    })
});

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'Banda Nemecio',
        titulo: 'Curso de Node'
    })
});

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.hbs')
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});