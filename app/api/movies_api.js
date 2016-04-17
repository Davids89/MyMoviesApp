var Movie = require('../models/Movie.js');
var constants = require('../../config/constants.js');
var http = require('http');

module.exports = function(app, config){

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

