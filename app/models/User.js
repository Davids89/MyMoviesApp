var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
	email : String,
	name : String,
	password : String,
	birthdate : Date,
	friends : [Schema.Types.ObjectId]
});

module.exports = mongoose.model('User', UserSchema);