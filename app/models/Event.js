var mongoose = require('mongoose');

var EventSchema = mongoose.Schema({
	users : [Schema.Types.ObjectId],
	date : Date,
	place : String,
	movie : String,
	cinema : Boolean
});

module.exports = mongoose.model('Event', EventSchema);