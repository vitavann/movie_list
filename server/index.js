// import express framework
const express = require('express');
const path = require('path');
const controller = require('./controllers/controller.js')

//set PORT# to listen on 
const PORT = 3000;

//create server 
const app = express();
// serve static files 
app.use(express.static(path.join(__dirname, '../client/dist')));
app.get('./movies', controller.getMovies);

// start server 
app.listen(PORT, () => console.log('express server started on', PORT));