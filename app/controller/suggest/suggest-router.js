// angular.module('suggest.router',['suggest.controller'])
// .state('app.suggest', {
//         url: 'suggest',
//         views: {
//             'content@': {
//                 templateUrl: 'templates/suggest.html',
//                 controller: 'SuggestController'
//             }
//         }

//     })
// ========================================
 angular.module('suggest.router',['suggest.controller'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {

  $stateProvider
    .state('app.suggest', {
        url: 'suggest',
        views: {
            'content@': {
                templateUrl: 'www/templates/suggest.html',
                controller: 'SuggestController'
            }
        }

    })
}])
