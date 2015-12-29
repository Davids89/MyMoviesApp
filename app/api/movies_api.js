var Movie = require('../models/Movie.js');
var constants = require('../../config/constants.js');
var http = require('http');

module.exports = function(app){

	app.get('/getPopularMovies', function(req, res){

        http.get(constants.popular_movies,
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

                            if(err){
                                res.status(500).json({ message : "Error in server. Find movie"});
                            }else{

                                if(movies.length > 0){
                                    //res.status(200).json({ message : "Movies stored"});

                                    console.log("entra");

                                    data.results.map(function(movie){
                                        if(findMovieInArray(movies, movie)){
                                            console.log("Ya esta almacenada");
                                        }else{
                                            var mMovie = new Movie();
                                            setMovieValues(mMovie, movie);
                                            if(saveMovieDetails(mMovie)){
                                                res.status(200).json({message : "Saved successfully"});
                                            }else{
                                                res.status(500).json({message : "Error"});
                                            }
                                        }
                                    })

                                }else{
                                    data.results.map(function(movie){
                                    var mMovie = new Movie();
                                    setMovieValues(mMovie, movie);
                                    if(saveMovieDetails(mMovie)){
                                        res.status(200).json({message : "Saved successfully"});
                                    }else{
                                        res.status(500).json({message : "Error"});
                                    }
                                })
                                }
                            }
                        });
                    } catch (e) {
                        console.log(e);
                    }
                })
        })
    });

    app.get('/checkIsRepeated', function(req, res){

        var repeated = false;

        Movie.find({}, function(err, movies){
            if(err){
                res.status(500).json({ message : "Error in server"});
            }

            Movie.find({}, function(err, movies){
                if(err){
                    res.status(500).json({ message : "Error in server. Find movie"});
                }

                if(movies.length > 0){
                while(movies.length > 0){
                    var mMovie = movies.shift();

                    if(findMovieInArray(movies, mMovie)){
                        console.log("Movie: ", mMovie.title, "repeated");
                        repeated = true;
                    }
                }

                if(!repeated){
                    console.log("No movies repeated");
                }
            }
            })
        })
    });

    app.get('/movie/:id', function(req, res){

        Movie.findOne({ id : req.params.id}, function(err, movie){
            if(err){
                return res.status(500).json({ message : 'Server error'});
            }

            return res.status(200).json({ movie : movie});
        })
    })

};

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
	        return false;
	    }else{
	        return true;
	    }
	})
}

function findMovieInArray(array, movie){
    array.map(function(mMovie){
        if(mMovie.id == movie.id){
            return true;
        }
    })

    return false;
}
