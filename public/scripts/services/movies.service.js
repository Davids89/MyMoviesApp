angular.module('app')

.factory('movieSrv', moviesService);

function moviesService($resource){

    var movieSrv = {};

    movieSrv.getPopularMovies = $resource("/popularMovies");

    return movieSrv;

}
