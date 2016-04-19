angular.module('app')

.config(config);

function config($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('popular', {
            url : '/popular',
            templateUrl : '/popular',
            controller : 'mainController',
            controllerAs : 'popularCtrl'
        })
        .state('friends', {
            url : '/friends',
            templateUrl : '/friends',
            controller : 'friendsController',
            controllerAs : 'friends'
        });

    $urlRouterProvider.otherwise('/popular');
}
