var mongoose = require('mongoose');

var CommentSchema = mongoose.Schema({
	movieID : Schema.Types.ObjectId,
	content : String,
	likes : Number,
	user : Schema.Types.ObjectId
});

module.exports = mongoose.model('Comment', CommentSchema);