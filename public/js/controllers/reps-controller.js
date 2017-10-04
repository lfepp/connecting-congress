angular.module('RepsCtrl', ['MainService']).controller('RepsController', ['$scope', 'Reps', function($scope, Reps) {
  $('#error-alert').hide();
  $scope.$on('dataCollected', function(event, responseData) {
    $scope.reps = responseData.responseData.officials;
    for(var i=0; i<$scope.reps.length; i++) {
      // $scope.reps.results[i].properChamber = $scope.reps.results[i].chamber[0].toUpperCase() + $scope.reps.results[i].chamber.substring(1);
      $scope.reps.
      angular.element(document.querySelector('#footer')).css({ 'margin-top': '+=280px' });
    }
    console.dir(angular.element(document.querySelector('#footer')));
  })
}]);
