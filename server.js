const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'José antonio'
    });

});

app.get('/about', (req, res) => {
    res.render('about', {
        titulo: 'Batman',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aut dolore quos velit ab odio atque sit nobis nihil ratione. Error at doloribus temporibus laboriosam qui libero exercitationem quas ipsa.'
    });
});


// app.get('/data', (req, res) => {
//     res.send('Hola Data');

// });


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
})