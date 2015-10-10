'use strict';

var root = 'https://congress.api.sunlightfoundation.com';
var apiKey = 'c5be18657d7e405d886fd840845aa279';
//HAVENT FINISHED FIELDS
var fields = '&fields=';

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
})

app.get('/api', function(req, res) {
  res.sendFile(__dirname + '/public/views/contact.html');
})

app.listen(9000);
module.exports = app;
