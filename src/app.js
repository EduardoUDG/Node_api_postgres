const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

//* ---- Path ---- *//
const taskPath = '/api/tasks';



//* ---- Middlewares ---- *//
app.use( express.json() );
app.use( express.urlencoded({ extended: false }));
app.use( express.static('public') );




//* ---- Routers ---- *//
app.use( taskPath, require('./router/tasks') );




app.listen( port , () => {
    console.log(`Servidor on port ${ port }`)
});