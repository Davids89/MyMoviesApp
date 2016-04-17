/*
 Created by David Luque Quintana
 daviluqui@gmail.com
 */


(function () {
    'use strict';

    angular
        .module('app', ['ui.router'])
        .config(config)
        .controller('myController', controller);

    controller.$inject = ['$window', 'moviesFactory', 'Movie'];

    function config($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('popular', {
                url : '/popular',
                templateUrl : '/popular'
            })

            .state('movie', {
                url : '/movie/:movieID',
                templateUrl : '/description'
            });

        $urlRouterProvider.otherwise('popular');
    }

    function controller($window, moviesFactory, Movie) {

        var vm = this;
        vm.popular = [];

        loadPage();

        function loadPage(){

            moviesFactory.getPopular()
                .success(function(response){
                    muestra10MasPopulares(response.movies);
                })
        }

        function muestra10MasPopulares(movies){

            movies.map(function(movie){

                var mMovie = new Movie(movie);

                vm.popular.push(mMovie);
            });

        }

    }
})();
