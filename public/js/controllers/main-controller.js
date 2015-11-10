angular.module('MainCtrl', ['MainService']).controller('MainController', ['$scope', 'Reps', function($scope, Reps) {
  $('#error-alert').hide();
  $scope.search = function() {
    Reps.search($scope.zipCode)
      .then(function successResponse(response) {
        var responseData = JSON.parse(response.data.body);
        if(responseData.count < 1) {
          console.error('ERROR: INVALID ZIP CODE');
          $('#error-alert').show();
          $scope.error = 'Invalid Zip Code'
        } else {
          console.log('Success');
          $scope.reps = responseData;
        }
      },
      function failureResponse(response) {
        console.log('Error ' + response);
        $scope.test = 'failure';
      })
  }
}]);
