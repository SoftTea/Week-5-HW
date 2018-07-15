const express = require('express');

const router = express.Router();

const Music = require('../models/music');

// ** Home Route **
router.get('/', (req,res)=>{
  
  Music.find({},(err, allMusic)=>{
    if(err) {
      console.log(err, 'error messages on home route')
    } else {
      res.render('index.ejs' , {
        music: allMusic
      })
    }
  })
});

// ** Create Page **

router.get('/new', (req,res)=>{
  res.render('new.ejs');
});

// ** POST Route -- Create Request **
router.post('/', (req,res)=>{
  Music.create(req.body, (err, created)=>{
    if(err) {
      res.render(err);
    } else {
      console.log('added obj', req.body);
      res.redirect('/music');
    }
  })
});

// ** Delete route **

router.delete('/:id', (req,res)=> {
  Music.findByIdAndDelete(req.params.id, (err,deleted)=>{
    if(err) {
      console.log('delete error', err)
    } else {
      console.log(deleted);
      res.redirect('/music')
    }
  })
});

// ** Show Route for individual information ** 

router.get('/:id', (req,res) => {
  Music.findById(req.params.id , (err,found)=>{
    if(err) {
      console.log('this is the error on show page', err);
      res.send(err);
    } else {
      res.render('show.ejs', {
        album: found
      })
    }
  })
})



module.exports = router;

