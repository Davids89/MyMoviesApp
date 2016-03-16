var Cinema = require('../models/Cinema.js');

module.exports = {
    getCinemas : function(req, res){
        Cinema.find({}, function(err, cinemas){
            if(err)
                return res.status(500).json({ error : "Error in server"});
            return res.status(200).json(cinemas);
        })
    }
};
