var mongoose = require('mongoose');

var CinemaSchema = mongoose.Schema({
	name : String,
	number_cinema_rooms : Number,
	city : String
});

module.exports = mongoose.model('Cinema', CinemaSchema);