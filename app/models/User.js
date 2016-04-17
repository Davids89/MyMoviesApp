var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
	email : String,
	name : String,
	password : String,
	birthdate : Date,
	friends : [mongoose.Schema.Types.ObjectId],
	facebook : {
		id : String,
		token : String,
		email : String,
		name : String
	}
});

module.exports = mongoose.model('User', UserSchema);