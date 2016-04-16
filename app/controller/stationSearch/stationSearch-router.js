// angular.module('stationSearch.router',['stationSearch.controller'])
// .state('app.stationSearch', {
//         url: 'stationSearch',
//         views: {
//             'content@': {
//                 templateUrl: 'templates/stationSearch.html',
//                 controller: 'StationSearchController'
//             }
//         }

//     })

// ====================================================
angular.module('stationSearch.router',['stationSearch.controller'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {

  $stateProvider
    .state('app.stationSearch', {
        url: 'stationSearch',
        views: {
            'content@': {
                templateUrl: 'www/templates/stationSearch.html',
                controller: 'StationSearchController'
            }
        }

    })
}])
