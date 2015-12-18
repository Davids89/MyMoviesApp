(function(){
	'use strict';

	angular
		.module('listMovies', [])
		.factory('ListMovies', listMovies);

	listMovies.$inject = ['$http'];

	function listMovies($http){

		var apiKey = '7c45e91d96f141e78609a00969329847';
		var baseURL = 'https://api.themoviedb.org/3';

		return {
			getPopular : function(){
				return $http.get(baseURL + '/movie/popular' + '?api_key=' + apiKey);
			}
		}
	}
})();