var Genre = require('../models/Genre.js');
var constants = require('../config/constants.js');

module.exports = function(app){

	app.get('/getGenres', function(req, res){

        http.get(popular.get_genres,
            function(resp){
                var data = '';//sino da error de undefined (syntaxerror undefined token u

                resp.on('data', function(chunk){

                    data += chunk;
                });

                resp.on('end', function(){
                    try {
                        data = JSON.parse(data.toString());
                        
                        Genre.find({}, function(err, genres){
                            
                            if(err){
                                res.status(500).json({ message : "Error in server. Find genres"});
                            }else{
                                
                            }
                            
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


}