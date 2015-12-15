var http = require('http');
var Genre = require('../models/Genre.js');

module.exports = function(app){

    app.get('/', function(req, res){
        res.render("index.ejs");
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