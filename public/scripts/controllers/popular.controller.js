angular.module('app')

.controller('popularController', popularController);

popularController.$inject = ['moviesFactory', 'Movie'];

function popularController(moviesFactory, Movie){
    var popular = this;

    popular.popularMovies = [];

    popular.getDataFromAPI = function(){
        moviesFactory.getPopularMovies.get().$promise
            .then(function(resp){

                var _movie = {};

                resp.map(function(movie){
                    _movie = new Movie(movie);
                    popular.popularMovies.push(_movie);
                });
            });
    };

    popular.getDataFromAPI();
    
}
