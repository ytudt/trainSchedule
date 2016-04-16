// angular.module('stationTo.router',['stationTo.controller'])
// .state('app.stationTo', {
//         url: 'stationTo',
//         views: {
//             'content@': {
//                 templateUrl: 'templates/stationTo.html',
//                 controller: 'StationToController'
//             }
//         }

//     })
//
//
//     ===============================================
angular.module('stationTo.router',['stationTo.controller'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {

  $stateProvider
    .state('app.stationTo', {
        url: 'stationTo',
        views: {
            'content@': {
                templateUrl: 'www/templates/stationTo.html',
                controller: 'StationToController'
            }
        }

    })
}])
