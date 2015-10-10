'use strict';

// Query to call Sunlight Congress API
var root = 'https://congress.api.sunlightfoundation.com/legislators/locate?';
var apiKey = '&apikey=c5be18657d7e405d886fd840845aa279';
var fields = '&fields=bioguide_id,chamber,first_name,last_name,party,phone,oc_email,contact_form,facebook_id,twitter_id,youtube_id,website,state';
var zipCode = '';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.text());

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
})

app.post('/api', function(req, res) {
  zipCode = req.body;
  var query = root + zipCode + apiKey + fields;
  request(query, function(error, response, body) {
    if(error) {
      console.error(error);
    } else if(response.statusCode != 200) {
      console.error('Error: Status Code: ' + response.statusCode);
    } else {
      res.redirect('/contact?data=' + body);
    }
  })
})

app.get('/contact', function(req, res) {
  res.sendFile(__dirname + '/public/views/contact.html');
})

app.listen(9000);
module.exports = app;
