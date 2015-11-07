angular.module('MainCtrl', []).controller('MainController', ['$scope', 'MainService', function($scope, MainService) {
  $scope.search = function() {
    MainService.search($scope.zipCode)
      .success(function(response) {
        console.dir(response);
        $scope.test = 'success';
      })
      .error(function(response) {
        console.error('ERROR ERROR ERROR');
        console.dir(response);
        $scope.test = 'failure';
      })
  }
}]);
