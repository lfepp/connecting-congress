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
var fs = require('fs');

if (!process.env.API_KEY && !process.env.REFERER) {
  var config = JSON.parse(fs.readFileSync(__dirname + '/config.json', 'utf8'));
  process.env.API_KEY = config.google.key;
  process.env.REFERER = config.google.referer;
}

var googleCivicKey = process.env.API_KEY;
var googleCivicBaseURL = 'https://www.googleapis.com/civicinfo/v2/representatives?key=';
//
// var proPublicaKey = config.propublica.key;
// var proPublicaOptions = {
//   url: '',
//   headers: {},
// };

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.text());

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
})

app.post('/api', function(req, res) {
  var zipCode = req.query.zip;
  var levelsOption = 'country';
  var rolesOptions = ['legislatorLowerBody', 'legislatorUpperBody'];
  var googleCivicOptions = {
    url: googleCivicBaseURL + googleCivicKey + '&address=' + zipCode + '&levels=' + levelsOption + '&roles=' + rolesOptions[0] + '&roles=' + rolesOptions[1],
    headers: {'Referer': process.env.REFERER}
  };
  request(googleCivicOptions, function(error, response, body) {
    if(error) {
      console.error(error);
    } else if(response.statusCode != 200) {
      console.error('Error: Status Code: ' + response.statusCode);
      console.dir(response);
    } else {
      console.log('Successful response');
      res.send(response);
    }
  })
})

app.listen(process.env.PORT || 9000);
module.exports = app;
