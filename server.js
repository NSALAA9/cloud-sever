'use strict';

const express = require('express');
const app = express();
app.use(express.json());


app.get('/', HomeHandler);
app.get('/games', GamesHandler);


function HomeHandler(req,res){
    res.status(200).json('Welcome To Home Page!')
}


function GamesHandler(req,res){
    res.status(200).json('Welcome To Games Page!')
}

 app.listen(5000, ()=> {console.log('Up and running on port: 5000')
})