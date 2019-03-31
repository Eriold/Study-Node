require('./config/config');
const colors = require('colors/safe');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


//Configuración globla de rutas
app.use(require('./routes/index.js'));


//--------------------------------------------------------------------
//old version
// mongoose.connect('mongodb://localhost:27017/cafe', process.env.urlDB, (err, res) => {
//     if (err) throw err;

//     console.log(colors.blue('Base de datos online.'));

// }, { useNewUrlParser: true });
//--------------------------------------------------------------------

let options = { useNewUrlParser: true, useCreateIndex: true };
let address = process.env.URLDB;
mongoose.connect(address, options, (err, res) => {

    if (err) throw err;

    console.log(colors.blue('Base de datos Online!'));
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto:', process.env.PORT);
});