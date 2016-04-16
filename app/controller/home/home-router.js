angular.module('home.router',['home.controller'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
  $stateProvider
    .state('app.home', {
        url: 'home',
        views: {
            'content@': {
                templateUrl: 'www/templates/home.html',
                controller: 'HomeController'
            }
        }

    })
}])
