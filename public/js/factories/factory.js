/*
	Created by David Luque Quintana
	daviluqui@gmail.com
*/

(function(){
	'use strict';

	angular
		.module('configFactory', [])
		.factory('Configuration', configuration);

	configuration.$inject = ['$http'];

	function configuration($http){

		var Configuration = function(){
			this.change_keys = undefined;
			this.images = undefined;
		};

		var apiKey = '7c45e91d96f141e78609a00969329847';
		var baseURL = 'http://api.themoviedb.org/3';

		Configuration.prototype.getConfiguration = function(){
			var self = this;

			return $http.get(baseURL + '/configuration' + '?api_key=' + apiKey)
				.then(function(response){
					console.log(response);

					self.change_keys = response.data.change_keys;
					self.images = response.data.images;
				})
		};

		return Configuration;
	}
})();