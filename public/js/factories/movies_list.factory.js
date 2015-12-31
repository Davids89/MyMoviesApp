(function(){
	'use strict';

	angular
		.module('movies_listFactory', [])
		.service('moviesFactory', moviesFactory);

	moviesFactory.$inject = ['$http'];

	function moviesFactory($http){

		var apiKey = '7c45e91d96f141e78609a00969329847';
		var baseURL = 'https://api.themoviedb.org/3';

		return {
			getPopular : function(){
				return $http.get(baseURL + '/movie/popular' + '?api_key=' + apiKey + '&language=es');
			},
            getMovie : function(id){
                return $http.get('/movie/'+id);
            }
		}
	}
})();
