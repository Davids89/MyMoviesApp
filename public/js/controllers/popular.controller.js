/*
 Created by David Luque Quintana
 daviluqui@gmail.com
 */


(function () {
    'use strict';

    angular
        .module('popularController', ['ngMaterial', 'ui.router'])
        .config(config)
        .controller('myController', controller);

    controller.$inject = ['Configuration', '$window', 'moviesFactory', 'Movie'];

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

    function controller(Configuration, $window, moviesFactory, Movie) {

        var vm = this;
        vm.popular = [];

        loadPage();

        function loadPage(){

            var configuration = new Configuration();

            configuration.getConfiguration();

            console.log(configuration);

            moviesFactory.getPopular()
                .success(function(response){
                    muestra10MasPopulares(response.results);
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
