angular.module('app')

.controller('mainController', mainController);

mainController.$inject = ['movieSrv'];

function mainController(movieSrv){
    var popular = this;

    popular.prueba = 'prueba';

    debugger;

    movieSrv.getPopularMovies().get().$promise().then(function(resp){
        console.log(resp);
    })
}
