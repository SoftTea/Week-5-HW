const express = require('express');

const app = express();

// require our model 
// the model should be capitalized 
const Fruits = require('./models/fruits');

// creating the index route
// index route should show all the fruits 
app.get('/fruits', (req,res) => {
  res.send(Fruits);
})



// app.get('/', (req, res) => {
//   res.send('testy test test tes')
// })

// we are trying to go to localhost:3000/fruits/0 --> apple

// we are going to use query params to act like a variable which, can be sent over by the client

// this is the show route   -> this route always show's one item from the model
app.get('/fruits/:index', (req,res)=>{
  // console.log(req.params.name);
  // // switch(req.params.index){
  // //   case '0': res.send(fruits[0]);
  // //   break;
  // //   case '1': res.send(fruits[1]);
  // //   break;
  // //   case '2': res.send(fruits[2]);
  // //   break;
  // // }
  // res.send(Fruits[req.params.index]);

  // Render ss when you want to send an ejs template to the client
  res.render('show.ejs', {
    fruit: Fruits[req.params.index] // this creates a 'fruit' variable in the show page
  })
})

app.listen(3000, ()=>{
  console.log('test')
})