angular.module('RepsCtrl', ['MainService']).controller('RepsController', ['$scope', 'Reps', function($scope, Reps) {
  $('#error-alert').hide();
  $scope.$on('dataCollected', function(event, responseData) {
    $scope.reps = responseData.responseData;
    console.dir($scope.reps);
  })
}]);
