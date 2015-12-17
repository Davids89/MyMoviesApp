var mongoose = require('mongoose');

var EventSchema = mongoose.Schema({
	users : [Schema.Types.ObjectId],
	date : Date,
	place : String,
	movie : Schema.Types.ObjectId,
	cinema : Schema.Types.ObjectId
});

module.exports = mongoose.model('Event', EventSchema);