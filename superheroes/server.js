const express = require('express');
const app = express();

// const superHeroes = ['batman', 'superman', 'hulk']; 
const superHeroes = [{ name: "superman", powers: ['flight', 'invulnerability', 'x-ray vision']}, { name: "batman", powers: ['money']},{ name: "hulk", powers: ['anger n stuff']}]

app.get('/superheroes', (req, res)=>{
  res.send(superHeroes);
})

app.get('/superheroes/:index', (req,res)=>{
  res.send(superHeroes[req.params.index].name);
})

app.listen(3000, ()=>{
  console.log('port is open')
})