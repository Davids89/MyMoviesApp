(function(){
	'use strict';

	angular
		.module('app')
		.service('moviesFactory', moviesFactory);

	moviesFactory.$inject = ['$http'];

	function moviesFactory($http){

		return {
			getPopular : function(){
				return $http.get('/popularMovies');
			},
            getMovie : function(id){
                return $http.get('/movie/'+id);
            }
		}
	}
})();
