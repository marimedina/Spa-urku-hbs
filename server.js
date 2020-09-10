const express = require('express');
const app = express();

const port = process.env.PORT || 8000

const hbs = require('hbs');

app.use(express.static(__dirname + '/views'));

hbs.registerPartials(__dirname + '/views/Parciales')
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/portfolio', (req, res) => {
    res.render('portfolio')
})

app.get('/blog', (req, res) => {
    res.render('blog')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})
app.listen(port);
console.log(`Server escuchando en http://localhost:${port}/`);