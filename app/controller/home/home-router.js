angular.module('home.router',['home.controller'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
  console.log(111)
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
