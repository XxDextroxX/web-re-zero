const express = require('express');

const app = express();
const hbs = require('hbs');
require('./hbs/helpers/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
//helpers



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Dextrox',
        titulo: 'Pagina web| Demo',

    });
});

app.get('/about', (req, res) => {
    res.render('about', {});
});

app.listen(port, () => {
    console.log(`Corriendo servicio en el pueto ${port}`);
});