'use strict';

// Query to call Sunlight Congress API
var root = 'https://congress.api.sunlightfoundation.com/legislators/locate?';
var apiKey = '&apikey=c5be18657d7e405d886fd840845aa279';
var fields = '&fields=chamber,first_name,last_name,party,phone,oc_email,contact_form,facebook_id,twitter_id,youtube_id,website';
var zipCode = '';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.text());

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
})

app.post('/api', function(req, res) {
  res.sendFile(__dirname + '/public/views/contact.html');
  zipCode = req.body;
  var query = root + zipCode + apiKey + fields;
  console.log(query);
})

app.listen(9000);
module.exports = app;
