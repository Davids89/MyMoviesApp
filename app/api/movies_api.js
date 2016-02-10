var Movie = require('../models/Movie.js');
var constants = require('../../config/constants.js');
var http = require('http');

module.exports = function(app, config){

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

                                var movieArray = [];

                                if(movies.length > 0){
                                    //res.status(200).json({ message : "Movies stored"});

                                    movieArray = [];

                                    data.results.map(function(movie){

                                        if(findMovieInArray(movies, movie)){
                                            console.log("Ya esta almacenada");
                                        }else{
                                            movieArray.push(movie);
                                        }
                                    });

                                    if(setMovieValues(movieArray)){
                                        return res.status(200).json({ message : "Success creating movies"});
                                    }else{
                                        return res.status(500).json({ message : "Error creating movie"});
                                    }

                                }else{

                                    movieArray = [];

                                    data.results.map(function(movie){
                                        movieArray.push(movie);
                                    });

                                    if(setMovieValues(movieArray)){
                                        console.log("hola");
                                        return res.status(200).json({ message : "Success creating movie"});
                                    }else{
                                        return res.status(500).json({ message : "Error creating movie"});
                                    }
                                }
                            }
                        });
                    } catch (e) {
                        console.log(e);
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
    });

    app.get('/popularMovies', function(req, res){
        Movie.find({ popular : true}, function(err, movies){
            if(err){
                return res.status(500).json({ message : 'Server error'});
            }

            return res.status(200).json({ movies : movies});
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

    /*Movie.create(APImovie, function(err, movies){
        console.log(movies);
    });*/
}

function findMovieInArray(array, movie){
    array.map(function(mMovie){
        if(mMovie.id == movie.id){
            return true;
        }
    });

    return false;
}

