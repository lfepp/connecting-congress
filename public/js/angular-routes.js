angular.module('angularRoutes', []).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/');

$stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'MainController'
  })

  .state('reps', {
    url: '/representative-data',
    templateUrl: 'views/contact.html',
    controller: 'RepsController'
  })

}]);
