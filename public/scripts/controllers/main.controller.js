angular.module('app')

.controller('mainController', mainController);

mainController.$inject = ['moviesFactory'];

function mainController(movieSrv){
    var popular = this;

    console.log("entra");

    popular.prueba = 'prueba';

    
    
}
