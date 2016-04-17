
// =============================================================
  angular.module('trainNumber.router',['trainNumber.controller'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {

  $stateProvider
    .state('app.trainNumber', {
        url: 'trainNumber',
        views: {
            'content@': {
                templateUrl: 'www/templates/trainNumber.html',
                controller: 'TrainNumberController'
            }
        }

    })
}])
