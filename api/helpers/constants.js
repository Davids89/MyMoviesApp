
var apiKey = "7c45e91d96f141e78609a00969329847";

module.exports = {
	'popular_movies' : 'http://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=es',
	'get_genres' : 'http://api.themoviedb.org/3/genre/movie/list?api_key=' + apiKey,
	'poster_size' : 'https://image.tmdb.org/t/p/w154',
	'facebook_id' : '976324802404520',
	'facebook_secret' : '030422f0351862edafa06372638e4370',
	'facebook_callback' : '/login/facebook/return'
};
