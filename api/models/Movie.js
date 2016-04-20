var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

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
    cast : [String],
    production_companies : [{
        name : String,
        id:Number
    }],
    popular : { type : Boolean, default : false}
});

MovieSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Movie', MovieSchema);
