var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/livecode')

var foods = require('./routes/foods');
var restaurants = require('./routes/restaurants');

var port = 3000;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connection.on('connected', function(){
  console.log('Mongoose is connected');
})

app.use('/foods', foods);
app.use('/restaurants', restaurants);
app.listen(port, function(){
  console.log(`Listening on port: ${port}`);
});

module.exports = app;
