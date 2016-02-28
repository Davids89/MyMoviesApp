var Genre = require('../models/Genre.js');
var Movie = require('../models/Movie.js');
var constants = require('../helpers/constants.js');
var http = require('http');

module.exports = function (app, config) {

    app.get('/getGenres', function (req, res) {
        Genre.find({}, function (err, genres) {

            if (err)
                return res.status(500).json({message: "Error searching genres"});
            return res.status(200).json(genres);
        });
    });

    app.get('/getByGenre/:genreId', function (req, res) {

        var genreId = req.params.genreId;

        Movie.find({genre_ids: {$in : [genreId]}}, function (err, movies) {
            if (err)
                return res.status(500).json({message: err});
            return res.status(200).json(movies);
        });
    });
};
