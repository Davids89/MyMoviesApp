/*
 Created by David Luque Quintana
 daviluqui@gmail.com
 */


(function () {
    'use strict';

    angular
        .module('controller', ['ngMaterial', 'ui.router'])
        .config(config)
        .controller('myController', controller);

    controller.$inject = ['Configuration', '$window', 'ListMovies', 'Movie'];

    function config($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('popular', {
                views : {
                    "general" : {
                        url : "/popular",
                        templateUrl : '/popular'
                    }
                }
            })

            .state('movie', {
                views: {
                    "general" : {
                        url : '/movie',
                        templateUrl : '/description'
                    }
                }
            });

        $urlRouterProvider.otherwise('popular');
    }

    function controller(Configuration, $window, ListMovies, Movie) {

        var vm = this;
        vm.popular = [];

        loadPage();

        function loadPage(){

             var configuration = new Configuration();

            configuration.getConfiguration();

            ListMovies.getPopular()
                .success(function(response){
                    muestra10MasPopulares(response.results);
                })
        }

        function muestra10MasPopulares(movies){

            movies.map(function(movie){

                var mMovie = new Movie(movie);

                vm.popular.push(mMovie);
            });

            console.log(vm.popular);
        }
    
    }
})();