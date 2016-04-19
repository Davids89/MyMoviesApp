(function(){
	'use strict';

	angular
		.module('app')
		.service('moviesFactory', moviesFactory);

	moviesFactory.$inject = ['$resource'];

	function moviesFactory($resource){

		var moviesFactory = {};

		moviesFactory.getPopularMovies = $resource("/popularMovies", {}, {
			'get' : {
				method : 'GET',
				isArray : true
			}
		});

		return moviesFactory;
	}
})();
