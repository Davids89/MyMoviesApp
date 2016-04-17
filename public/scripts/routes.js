angular.module('app')

.config(config);

function config($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('landing', {
            url: '/',
            templateUrl: '/landing'
        })
        .state('main', {
            url : '/',
            templateUrl : '/popular',
            controller : 'mainController',
            controllerAs : 'popularCtrl'
        });

    $urlRouterProvider.otherwise('/');
}
