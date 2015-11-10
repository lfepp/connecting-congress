angular.module('MainService', []).factory('Reps', ['$http', function($http) {

  return {
    search: function(zipCode) {
      return $http({
        method: 'POST',
        url: '/api',
        params: {
          zip: zipCode
        }
      })
      // JUST MOVED THIS DATA, NEED TO CLEAN AND REMOVE $SCOPE, THIS IS A SERVICE
      .then(function successResponse(response) {
        var responseData = JSON.parse(response.data.body);
        if(responseData.count < 1) {
          console.error('ERROR: INVALID ZIP CODE');
          $('#error-alert').show();
        } else {
          console.log('Success');
          $scope.reps = responseData;
        }
      },
      function failureResponse(response) {
        console.log('Error ' + response);
      });
    }
  }
}])
