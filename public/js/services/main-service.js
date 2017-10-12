angular.module('MainService', []).factory('Reps', ['$http', '$rootScope', function($http, $rootScope) {
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
          $rootScope.$broadcast('dataCollected', {
            responseData: JSON.parse(response.data.body)
          })
        } else {
          console.log('Success');
          console.dir(JSON.parse(response.data.body));
          $rootScope.$broadcast('dataCollected', {
            responseData: JSON.parse(response.data.body)
          })
        }
      },
      function failureResponse(response) {
        console.dir(response);
        $rootScope.$broadcast('dataCollected', {
          responseData: JSON.parse(response.data.body)
        })
      });
    },
    get: function() {
      return responseData;
    }
  }
}])
