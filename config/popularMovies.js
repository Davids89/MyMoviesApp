var Movie = require('../app/models/Movie.js');
var constants = require('./constants.js');
var http = require('http');


var getPopularMovies = function(){
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
                            console.log("Error in server. Find movie");
                            return null;
                        }else{

                            var movieArray = [];

                            if(movies.length > 0){
                                //res.status(200).json({ message : "Movies stored"});

                                movieArray = [];

                                data.results.map(function(movie){

                                    if(findMovieInArray(movies, movie)){
                                        console.log("Ya esta almacenada");
                                        return null;
                                    }else{
                                        movieArray.push(movie);
                                    }
                                });

                                if(setMovieValues(movieArray)){
                                    console.log("Success creating movies");
                                    return null;
                                }else{
                                    console.log("Error creating movie");
                                    return null;
                                }

                            }else{

                                movieArray = [];

                                data.results.map(function(movie){
                                    movieArray.push(movie);
                                });

                                if(setMovieValues(movieArray)){
                                    console.log("Success creating movie");
                                    return null;
                                }else{
                                    console.log("Error creating movie");
                                    return null;
                                }
                            }
                        }
                    });
                } catch (e) {
                    console.log(e);
                }
            })
        })
};

function setMovieValues(APImovie){

    APImovie.map(function(movie){

        movie.poster_path = 'https://image.tmdb.org/t/p/w154' + movie.poster_path;
        movie.popular = true;

        Movie.findOne({ id : movie.id }, function(err, find_movie){
            if(err){
                return false;
            }
            if(find_movie == null){
                Movie.create(movie, function(err, created_movie){
                    if(err){
                        return false;
                    }
                })
            }
        })
    });

    return true;
}

function findMovieInArray(array, movie){
    array.map(function(mMovie){
        if(mMovie.id == movie.id){
            return true;
        }
    });

    return false;
}

module.exports = getPopularMovies();
