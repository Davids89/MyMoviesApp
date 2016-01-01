
var apiKey = "7c45e91d96f141e78609a00969329847";

module.exports = {
	'popular_movies' : 'http://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=es',
	'get_genres' : 'http://api.themoviedb.org/3/genre/movie/list?api_key=' + apiKey
}
