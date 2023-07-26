'use strict';

const express = require('express');
const app = express();
app.use(express.json());


app.get('/', HomeHandler);
app.get('/pets', PetsHandler);


function HomeHandler(req,res){
    res.status(200).json('Welcome To Home Page!')
}


function PetsHandler(req,res){
    res.status(200).json('Welcome To Pets Page!')
}

 app.listen(8008, ()=> {console.log('Up and running on port: 8008')
})