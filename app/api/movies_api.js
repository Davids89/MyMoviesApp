var Movie = require('../models/Movie.js');

module.exports = function(app){

	app.get('/getPopularMovies', function(req, res){

        http.get('http://api.themoviedb.org/3/movie/popular?api_key=7c45e91d96f141e78609a00969329847',
            function(resp){
                console.log("Respuesta correcta " + resp.statusCode);

                var data = '';//sino da error de undefined (syntaxerror undefined token u

                resp.on('data', function(chunk){
                    data += chunk;
                });

                resp.on('end', function(){
                    try {
                        data = JSON.parse(data.toString());

                        Movie.find({}, function(err, movies){
                            if(movies.length > 0){
                                console.log(movies);
                            }else{
                                data.results.map(function(movie){
                                    //console.log(movie);
                                    var mMovie = new Movie();
                                    setMovieValues(mMovie, movie);
                                    saveMovieDetails(mMovie);
                                })
                            }
                        });
                    } catch (e) {
                        console.log(e);
                    }
                })
        })
    });

}

function setMovieValues(newMovie, APImovie){
	newMovie.poster_path = APImovie.poster_path;
	newMovie.adult = APImovie.adult;
	newMovie.overview = APImovie.overview;
	newMovie.release_date = APImovie.release_date;
	newMovie.genre_ids = APImovie.genre_ids;
	newMovie.id = APImovie.id;
	newMovie.original_title = APImovie.original_title;
	newMovie.original_language = APImovie.original_language;
	newMovie.title = APImovie.title;
    //TODO coger el production_companies
}

function saveMovieDetails(movie){
	movie.save(function(err){
	    if(err){
	        res.status(500).json({ message : "Error saving movie"});
	    }
	})
}