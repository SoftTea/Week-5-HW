const express = require('express');

const app = express();

const Pokemon = require('./models/pokemon');

const port = 3000;

app.get('/home', (req,res)=>{
    res.send('Welcome to the Pokemon App!');
})

app.get('/pokemon', (req,res)=>{
    res.send(Pokemon);
})

app.listen(port, ()=>{
    console.log('test')
})