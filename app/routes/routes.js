var http = require('http');
var Movie = require('../models/Movie.js');
var Genre = require('../models/Genre.js');

module.exports = function(app){

    app.get('/', function(req, res){
        res.render("index.ejs");
    });

    app.get('/getPopularMovies', function(req, res){

        http.get('http://api.themoviedb.org/3/movie/popular?api_key=7c45e91d96f141e78609a00969329847',
            function(resp){
                console.log("Respuesta correcta" + resp.statusCode);

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
                                    mMovie.poster_path = movie.poster_path;
                                    mMovie.adult = movie.adult;
                                    mMovie.overview = movie.overview;
                                    mMovie.release_date = movie.release_date;
                                    mMovie.genre_ids = movie.genre_ids;
                                    mMovie.id = movie.id;
                                    mMovie.original_title = movie.original_title;
                                    mMovie.original_language = movie.original_language;
                                    mMovie.title = movie.title;
                                    mMovie.popularity = movie.popularity;
                                    mMovie.vote_count = movie.vote_count;
                                    mMovie.video = movie.video;
                                    mMovie.vote_average = movie.vote_average;

                                    mMovie.save(function(err){
                                        if(err){
                                            res.status(500).json({ message : "Error saving movie"});
                                        }
                                    })
                                })
                            }
                        });
                    } catch (e) {
                        console.log(e);
                    }
                })
        })
    });

    app.get('/getGenres', function(req, res){

        http.get('http://api.themoviedb.org/3/genre/movie/list?api_key=7c45e91d96f141e78609a00969329847',
            function(resp){
                var data = '';//sino da error de undefined (syntaxerror undefined token u

                resp.on('data', function(chunk){

                    data += chunk;
                });

                resp.on('end', function(){
                    try {
                        data = JSON.parse(data.toString());
                        
                        Genre.find({}, function(err, genres){
                            if(genres.length > 0){

                            }else{
                                data.genres.map(function(genre){
                                    var mGenre = new Genre();
                                    mGenre.id = genre.id;
                                    mGenre.name = genre.name;

                                    mGenre.save(function(err){
                                        if(err){
                                            res.status(500).json({ message : "Error saving genre"});
                                        }
                                        res.status(200).json({message : "Genres saved successfully"});
                                    })
                                })
                            }
                        });
                    }catch(e){
                        console.log(e);
                    }
                })
            })

    });

    app.get('/popular', function(req, res){
        console.log("hola");
        res.render('popular.ejs');
    });

    app.get('/description', function(req, res){
        res.render('description.ejs');
    });

};