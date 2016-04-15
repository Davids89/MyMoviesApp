angular.module('app')

    .controller('indexController', indexController);

indexController.$inject = ['$mdDialog'];

function indexController($mdDialog){
    
    var index = this;
    
    index.clickDialogUser = function(ev){
        var confirm = $mdDialog.confirm()
            .title('Encuesta super urgente')
            .textContent('¿Crees que Leti es retra?')
            .ariaLabel('Lucky day')
            .targetEvent(ev)
            .ok('Siii')
            .cancel('Noooooo');
        $mdDialog.show(confirm).then(function() {
            console.log("Acepta");
        }, function() {
            console.log("Cancela");
        });
    }
}