var mongoose = require('mongoose');

var CommentSchema = mongoose.Schema({
	movieID : Schema.Types.ObjectId,
	content : String,
	likes : Number
});