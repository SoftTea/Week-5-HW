const mongoose = require('mongoose');
const db = mongoose.connection;
const Vampire = require('./models/vampires');

mongoose.connect('mongodb://localhost:27017/vampires');

db.on('error', (err)=>{
  console.log(err, 'this is an err message');
  
})

db.on('connected', ()=>{
  console.log('mongoose is connected to mongodb');
  
})

// Vampire.create({name: 'Vampis Vamp',
//     hair_color: 'Blue',
//     eye_color: 'Blue',
//     dob: new Date(20, 2, 13, 7, 47),
//     loves: ['things','stuff'],
//     location: 'Placey place',
//     gender: 'f',
//     victims: 2}, (err,res)=>{
//       if(err){
//         console.log(err);
//       } else {
//         console.log(res);
//       }
//     })

//     Vampire.create({name: 'Created second vamp',
//     hair_color: 'Blue',
//     eye_color: 'Blue',
//     dob: new Date(20, 2, 13, 7, 47),
//     loves: ['things','stuff'],
//     location: 'Placey place',
//     gender: 'f',
//     victims: 2}, (err,res)=>{
//       if(err){
//         console.log(err);
//       } else {
//         console.log(res);
//       }
//     })
//     Vampire.create({name: 'Created third vamp',
//     hair_color: 'Blue',
//     eye_color: 'Blue',
//     dob: new Date(20, 2, 13, 7, 47),
//     loves: ['things','stuff'],
//     location: 'Placey place',
//     gender: 'm',
//     victims: 2}, (err,res)=>{
//       if(err){
//         console.log(err);
//       } else {
//         console.log(res);
//       }
//     })
//     Vampire.create({name: 'Created fourth vamp',
//     hair_color: 'Blue',
//     eye_color: 'Blue',
//     dob: new Date(20, 2, 13, 7, 47),
//     loves: ['things','stuff'],
//     location: 'Placey place',
//     gender: 'm',
//     victims: 2}, (err,res)=>{
//       if(err){
//         console.log(err);
//       } else {
//         console.log(res);
//       }
//     })