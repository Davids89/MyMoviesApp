var Genre = require('../models/Genre.js');
var Movie = require('../models/Movie.js');

module.exports = {
    getAllGenres : function(req, res){
        Genre.find({}, function (err, genres) {

            if (err)
                return res.status(500).json({message: "Error searching genres"});
            return res.status(200).json(genres);
        });
    },
    getMoviesByGenre : function(req, res){
        var genreId = req.params.id;

        Movie.find({genre_ids: {$in : [genreId]}}, function (err, movies) {
            if (err)
                return res.status(500).json({message: err});
            return res.status(200).json(movies);
        });
    }
};
