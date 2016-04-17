define([], function(){
    'use strict';

    function config($stateProvider, $urlRouterProvider){

        console.log("entra");

        $stateProvider.state('index', {
            url : '/index',
            name : 'index',
            templateUrl: '../views/index.ejs',
            controller: 'public/js/controllers/main.controller',
            controllerAs : 'main'
        });

        $urlRouterProvider.otherwise('index');
    }

    return config;
});
