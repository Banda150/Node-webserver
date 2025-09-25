
require('dotenv').config();
const express = require('express')
var hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servidor contenido estatico
app.use( express.static('public'));

app.get('/', (req, res) => {
    res.render('home',{
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