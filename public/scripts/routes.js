angular.module('app', ['ui.router'])

.config(config);

function config($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('/', {
            url : '/',
            templateUrl : '/popular',
            controller : 'mainController',
            controllerAs : 'popularCtrl'
        });

    $urlRouterProvider.otherwise('/');
}
