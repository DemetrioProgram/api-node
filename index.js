const fs = require('fs')
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const connectionDB = require('./src/database/Connection');


connectionDB();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log('Iniciando rotas...');
const routesPath = './src/routes';
const routesDir = fs.readdirSync(routesPath);
routesDir.map(route => require(routesPath + '/' + route)(app) );

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => console.log('Server running on port ' + process.env.PORT));

module.exports = app;