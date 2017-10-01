'use strict';

// // Query to call Sunlight Congress API
// var root = 'https://congress.api.sunlightfoundation.com/legislators/locate?zip=';
// var zipCode = '';
// var apiKey = '&apikey=c5be18657d7e405d886fd840845aa279';
// var fields = '&fields=bioguide_id,chamber,first_name,last_name,party,phone,oc_email,facebook_id,twitter_id,youtube_id,website,state';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');

var config = JSON.parse(__dirname + 'config.json');

var googleCivicKey = config.google.key;
var googleCivicOptions = {
  url: '',
};

var proPublicaKey = config.propublica.key;
var proPublicaOptions = {
  url: '',
  headers: {},
};

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.text());

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
})

app.post('/api', function(req, res) {
  zipCode = req.query.zip;
  var query = root + zipCode + apiKey + fields;
  request(query, function(error, response, body) {
    if(error) {
      console.error(error);
    } else if(response.statusCode != 200) {
      console.error('Error: Status Code: ' + response.statusCode);
      console.error(response.body);
    } else {
      console.log('Successful response');
      res.send(response);
    }
  })
})

app.listen(process.env.PORT || 9000);
module.exports = app;
