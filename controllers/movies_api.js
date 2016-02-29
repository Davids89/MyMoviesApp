var Movie = require('../models/Movie.js');

module.exports = {
    getPopularMovies : function(req, res){
        Movie.find({ popular : true}, function(err, movies){
            if(err){
                return res.status(500).json({ message : 'Server error'});
            }

            return res.status(200).json({ movies : movies});
        })
    },

    getMovie : function(req, res){
        Movie.findOne({ id : req.params.id}, function(err, movie){
            if(err){
                return res.status(500).json({ message : 'Server error'});
            }

            return res.status(200).json({ movie : movie});
        })
    }
};

