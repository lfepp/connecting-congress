angular.module('MainService', []).factory('Reps', ['$http', function($http) {
  var responseData = {};

  return {
    search: function(zipCode) {
      $http({
        method: 'POST',
        url: '/api',
        params: {
          zip: zipCode
        }
      })
      .then(function successResponse(response) {
        if(JSON.parse(response.data.body).count < 1) {
          console.error('ERROR: INVALID ZIP CODE');
          responseData = {
            status: 'ERROR: INVALID ZIP CODE'
          }
        } else {
          console.log('Success');
          responseData = JSON.parse(response.data.body);
        }
      },
      function failureResponse(response) {
        console.log('Error ' + response);
        responseData = {
          status: 'Error'
        }
      });
    },
    get: function() {
      //NEED TO SET UP A WAY OF ENSURING WE DONT RETURN THIS UNTIL HTTP REQUEST IS COMPLETE
      return responseData;
    }
  }
}])
