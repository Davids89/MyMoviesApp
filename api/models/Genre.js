var mongoose = require('mongoose');

var GenreSchema = mongoose.Schema({
    id : String,
    name : String
});

module.exports = mongoose.model('Genre', GenreSchema);