const express = require('express');

const router = express.Router();

const Music = require('../models/music');

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
})


module.exports = router;

