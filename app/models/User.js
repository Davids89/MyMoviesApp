var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
	email : String,
	name : String,
	password : String,
	birthdate : Date
});

module.exports = mongoose.model('User', UserSchema);