angular.module('router',['ui.router','home.router','index.router','stationSearch.router','stationTo.router','trainNumber.router','suggest.router'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  // $urlRouterProvider.otherwise('home');
  $urlRouterProvider.otherwise('/');
}]);
