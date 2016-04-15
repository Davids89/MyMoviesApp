angular.module('app')

.config(config);

function config($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('main', {
            url : '/popular',
            templateUrl : '/popular',
            controller : 'mainController',
            controllerAs : 'popularCtrl'
        });

    $urlRouterProvider.otherwise('/popular');
}
