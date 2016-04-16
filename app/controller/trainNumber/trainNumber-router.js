// angular.module('trainNumber.router',['trainNumber.controller'])
// .state('app.trainNumber', {
//         url: 'trainNumber',
//         views: {
//             'content@': {
//                 templateUrl: 'templates/trainNumber.html',
//                 controller: 'TrainNumberController'
//             }
//         }

//     })
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
