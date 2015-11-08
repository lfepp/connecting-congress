angular.module('MainCtrl', ['MainService']).controller('MainController', ['$scope', 'Reps', function($scope, Reps) {
  $scope.search = function() {
    Reps.search($scope.zipCode)
      .success(function(response) {
        console.log('Success ' + response);
        $scope.test = 'success';
      })
      .error(function(response) {
        console.log('Error ' + response);
        $scope.test = 'failure';
      })
  }
}]);
