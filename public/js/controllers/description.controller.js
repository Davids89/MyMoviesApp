(function () {
    'use strict';

    angular
        .module('app')
        .controller('descriptionController', controller);

    //controller.$inject = [];

    function controller($stateParams, moviesFactory){

        var vm2 = this;

        vm2.movie = window.movie;
        vm2.movie_info = undefined;

        getMovie();

        function getMovie(){
            var movieID = $stateParams.movieID;

            moviesFactory.getMovie(movieID)
                .success(function(resp){
                    vm2.movie_info = resp.movie;

                    console.log(vm2.movie_info);
                })
        }

    }
})();

