(function () {
    'use strict';

    angular
        .module('controller')
        .controller('descriptionController', controller);

    //controller.$inject = [];

    function controller($stateParams, ListMovies){

        var vm2 = this;

        vm2.movie = window.movie;

        getMovie();

        function getMovie(){
            var movieID = $stateParams.movieID;

            ListMovies.getMovie(movieID)
                .success(function(resp){
                    console.log(resp);
                })
        }

    }
})();

