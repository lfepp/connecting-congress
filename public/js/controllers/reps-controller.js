angular.module('RepsCtrl', ['MainService']).controller('RepsController', ['$scope', 'Reps', function($scope, Reps) {
  $('#error-alert').hide();
  $scope.reps = Reps.get();
  console.dir($scope.reps);
}]);
