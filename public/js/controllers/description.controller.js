(function () {
    'use strict';

    angular
        .module('popularController')
        .controller('descriptionController', controller);

    //controller.$inject = [];

    function controller($stateParams, moviesFactory){

        var vm2 = this;

        vm2.movie = window.movie;

        getMovie();

        function getMovie(){
            var movieID = $stateParams.movieID;

            moviesFactory.getMovie(movieID)
                .success(function(resp){
                    console.log(resp);
                })
        }

    }
})();

