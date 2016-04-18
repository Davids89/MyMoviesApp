(function(){
	'use strict';

	angular
		.module('app')
		.factory('Movie', movie);

	movie.$inject = ['$http'];

	function movie($http){

		var Movie = function(data){
			if(data.adult){
				this.adult = data.adult;
			}else{
				this.adult = null;
			}

			if(data.backdrop_path){
				this.backdrop_path = data.backdrop_path;
			}else{
				this.backdrop_path = null;
			}

			if(data.belongs_to_collection) {
				this.belongs_to_collection = data.belongs_to_collection;
			}else{
				this.belongs_to_collection = null;
			}

			if(data.budget){
				this.budget = data.budget;
			}else{
				this.budget = null;
			}

			if(data.genres || data.genre_ids){
				this.genres = data.genres || data.genre_ids;
			}else{
				this.genres = [];
			}

			if(data.homepage){
				this.homepage = data.homepage;
			}else{
				this.homepage = null;
			}

			if(data.id){
				this.id = data.id;
			}else{
				this.id = null;
			}

			if(data.imdb_id){
				this.imdb_id = data.imdb_id;
			}else{
				this.imdb_id = null;
			}

			if(data.original_language){
				this.original_language = data.original_language;
			}else{
				this.original_language = null;
			}

			if(data.original_title){
				this.original_title = data.original_title;
			}else{
				this.original_title = null;
			}

			if(data.overview){
				this.overview = data.overview;
			}else{
				this.overview = null;
			}

			if(data.popularity){
				this.popularity = data.popularity;
			}else{
				this.popularity = null;
			}

			if(data.poster_path){
				this.poster_path = data.poster_path;
			}else{
				this.poster_path = null;
			}

			if(data.production_companies){
				this.production_companies = data.production_companies;
			}else{
				this.production_companies = null;
			}

			if(data.production_countries){
				this.production_countries = data.production_countries;
			}else{
				this.production_countries = null;
			}

			if(data.release_date){
				this.release_date = data.release_date;
			}else{
				this.release_date = null;
			}

			if(data.revenue){
				this.revenue = data.revenue;
			}else{
				this.revenue = null;
			}

			if(data.runtime){
				this.runtime = data.runtime;
			}else{
				this.runtime = null;
			}

			if(data.spoken_languages){
				this.spoken_languages = data.spoken_languages;
			}else{
				this.spoken_languages = null;
			}

			if(data.status){
				this.status = data.status;
			}else{
				this.status = null;
			}

			if(data.tagline){
				this.tagline = data.tagline;
			}else{
				this.tagline = null;
			}

			if(data.title){
				this.title = data.title;
			}else{
				this.title = null;
			}

			if(data.video){
				this.video = data.video;
			}else{
				this.video = null;
			}

			if(data.vote_average){
				this.vote_average = data.vote_average;
			}else{
				this.vote_average = null;
			}

			if(data.vote_count){
				this.vote_count = data.vote_count;
			}else{
				this.vote_count = null;
			}
		};

		return Movie;
	}
})();
