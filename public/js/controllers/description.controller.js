(function () {
    'use strict';

    angular
        .module('controller')
        .controller('descriptionController', controller);

    controller.$inject = ['$stateParams'];

    function controller($stateParams){
        console.log("hola", $stateParams);
    }
})();

