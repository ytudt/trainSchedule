angular.module('index.router',['index.controller'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
  $stateProvider
    .state('app',{
        url: '/',
        views: {
            'header': {
                templateUrl: 'www/templates/header.html'
            },
            'content': {
                templateUrl: 'www/templates/home.html'
            },
            'footer': {
                templateUrl: 'www/templates/footer.html'
            }
        }
    })
}])
