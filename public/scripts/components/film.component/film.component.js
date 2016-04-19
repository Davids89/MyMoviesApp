(function(){

    function movieController(){

    }

    angular.module('app')

        .directive('myMovie', function(){
            return {
                restrict : 'E',
                templateUrl : "/film.component",
                controller : movieController()
            }
        })
})();
