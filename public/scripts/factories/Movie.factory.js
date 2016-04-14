(function(){
	'use strict';

	angular
		.module('app')
		.factory('Movie', movie);

	movie.$inject = ['$http'];

	function movie($http){

		var Movie = function(data){
			this.adult = data.adult;
			this.backdrop_path = data.backdrop_path;
			this.belongs_to_collection = data.belongs_to_collection;
			this.budget = data.budget;
			this.genres = data.genres || data.genre_ids;
			this.homepage = data.homepage;
			this.id = data.id;
			this.imdb_id = data.imdb_id;
			this.original_language = data.original_language;
			this.original_title = data.original_title;
			this.overview = data.overview;
			this.popularity = data.popularity;
			this.poster_path = data.poster_path;
			this.production_companies = data.production_companies;
			this.production_countries = data.production_countries;
			this.release_date = data.release_date;
			this.revenue = data.revenue;
			this.runtime = data.runtime;
			this.spoken_languages = data.spoken_languages;
			this.status = data.status;
			this.tagline = data.tagline;
			this.title = data.title;
			this.video = data.video;
			this.vote_average = data.vote_average;
			this.vote_count = data.vote_count;
		}

		return Movie;
	}
})();
