angular.module('MainService', []).factory('Reps', ['$http', function($http) {
  var root = 'https://congress.api.sunlightfoundation.com/legislators/locate?';
  var apiKey = '&apikey=c5be18657d7e405d886fd840845aa279';
  var fields = '&fields=bioguide_id,chamber,first_name,last_name,party,phone,oc_email,facebook_id,twitter_id,youtube_id,website,state';

  return {
    search: function(zipCode) {
      var query = root + zipCode + apiKey + fields;
      return $http({
        method: 'POST',
        url: query
      });
    }
  }
}])
