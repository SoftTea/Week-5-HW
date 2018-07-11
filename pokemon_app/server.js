const express = require('express');

const app = express();

const Pokemon = require('./models/pokemon');

const port = 3000;

app.use(express.static('public'));

app.get('/home', (req,res)=>{
    res.send('Welcome to the Pokemon App!');
})

app.get('/pokemon', (req,res)=>{
    res.render('index.ejs', {
        pokemons: Pokemon
    });
})

app.get('/pokemon/:id', (req,res)=>{
    res.render('show.ejs', {
        pokemon: Pokemon[req.params.id]
    });
})

app.listen(port, ()=>{
    console.log('test')
})