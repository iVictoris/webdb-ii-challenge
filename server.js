const express = require('express')
const app = express()

const {router: carRouter} = require('./routes/carsRouter');

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/api/cars', carRouter);

module.exports = app;