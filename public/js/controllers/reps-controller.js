angular.module('RepsCtrl', ['MainService']).controller('RepsController', ['$scope', 'Reps', function($scope, Reps) {
  $('#error-alert').hide();
  $scope.$on('dataCollected', function(event, responseData) {
    $scope.reps = responseData.responseData.officials;
    console.dir($scope.reps);
    for(var i = 0; i < $scope.reps.length; i += 1) {
      for(var j = 0; j < $scope.reps[i].channels.length; j += 1) {
        switch ($scope.reps[i].channels[j].type) {
          case 'Facebook':
            $scope.reps[i].facebook_id = $scope.reps[i].channels[j].id;
            break;
          case 'Twitter':
            $scope.reps[i].twitter_id = $scope.reps[i].channels[j].id;
            break;
          case 'YouTube':
            $scope.reps[i].youtube_id = $scope.reps[i].channels[j].id;
            break;
          default:
            break;
        }
      }
    }
  });
}]);
