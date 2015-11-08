angular.module('MainService', []).factory('Reps', ['$http', function($http) {

  return {
    search: function(zipCode) {
      return $http({
        method: 'POST',
        url: '/api',
        params: {
          zip: zipCode
        }
      });
    }
  }
}])
