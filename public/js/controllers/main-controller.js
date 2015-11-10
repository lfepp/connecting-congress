angular.module('MainCtrl', ['MainService']).controller('MainController', ['$scope', 'Reps', function($scope, Reps) {
  $('#error-alert').hide();
  $scope.search = function() {
    Reps.search($scope.zipCode);
  }
}]);
