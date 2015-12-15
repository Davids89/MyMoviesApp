var mongoose = require('mongoose');

var MovieSchema = mongoose.Schema({
    poster_path : String,
    adult : Boolean,
    overview : String,
    release_date : String,
    genre_ids : [Number],
    id : Number,
    original_title : String,
    original_language : String,
    title : String,
    vote_count : Number,
});

module.exports = mongoose.model('Movie', MovieSchema);