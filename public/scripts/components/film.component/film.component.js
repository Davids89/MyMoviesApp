(function(){

    function movieController(){

    }

    angular.module('app')

        .directive('myMovie', function(){
            return {
                restrict : 'E',
                templateUrl : "public/js/components/film.component/film.component.html",
                controller : movieController()
            }
        })
})();
