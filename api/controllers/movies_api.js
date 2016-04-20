var Movie = require('../models/Movie.js');
var http = require('http');
var constants = require('../helpers/constants');

module.exports = {
    getPopularMovies : function(req, res){

        var page;

        if(req.params.page == undefined){
            page = 1;
        }else{
            page = req.params.page;
        }

        Movie.paginate({}, {page : page, limit : 24}, function(err, result){
            if(err)
                throw err;
            else{
                return res.status(200).json(result);
            }
        });

        /*Movie.find({ popular : true}, function(err, movies){
        //Movie.find({}, function(err, movies){
            if(err){
                return res.status(500).json({ message : 'Server error'});
            }

            return res.status(200).json(movies);
        })*/
    },

    getMovie : function(req, res){
        Movie.findOne({ id : req.params.id}, function(err, movie){
            if(err){
                return res.status(500).json({ message : 'Server error'});
            }

            return res.status(200).json(movie);
        })
    },

    updateMovie : function(req, res){

    },

    addPopular : function(req, res){

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

                        /**ESTO SE HA COMENTADO PORQUE SI HAGO UNA PETICION TENIENDO EXACTAMENTE
                         * LAS MISMAS PELICULAS, SE ME MARCAN COMO FALSE Y NO SE MUESTRAN EN LOS TESTS
                         */

                        /*Movie.find({popular : true}, function(err, popular_movie){

                            if(popular_movie.length > 0){
                                popular_movie.map(function(movie){
                                    movie.popular = false;
                                });

                                popular_movie.map(function (item) {
                                    item.save(function(err){
                                        if(err){
                                            return res.status(500).json({ "ERROR" : "Error creating movies"});
                                        }
                                    })
                                });
                            }
                        });*/

                        Movie.find({}, function(err, movies){

                            if(err){
                                return res.status(500).json({ "ERROR" : "Error creating movies"});
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
                                        return res.status(200).json({ "SUCCESS" : "Success creating movies"});
                                    }else{
                                        return res.status(500).json({ "ERROR" : "Error creating movies"});
                                    }

                                }else{

                                    movieArray = [];

                                    data.results.map(function(movie){
                                        movieArray.push(movie);
                                    });

                                    if(setMovieValues(movieArray)){
                                        return res.status(200).json({ "SUCCESS" : "Success creating movies"});
                                    }else{
                                        return res.status(500).json({ "ERROR" : "Error creating movies"});
                                    }
                                }
                            }
                        });
                    } catch (e) {
                        console.log(e);
                    }
                })
            });
    }
};

function setMovieValues(APImovie){

    APImovie.map(function(movie){

        movie.poster_path = constants.poster_size + movie.poster_path;
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

