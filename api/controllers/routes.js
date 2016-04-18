
module.exports = {

    getIndexTemplate : function(req, res){
        res.render("index.ejs");
    },

    getPopularTemplate : function(req, res){
        res.render('popular.ejs', { message : req.flash()});
    },

    getDescriptionTemplate : function(req, res){
        res.render('description.ejs');
    },

    getLandingTemplate : function(req, res){
        res.render('landing.ejs')
    }


    /*app.get('/login/facebook',
        passport.authenticate('facebook', {scope : 'email'}));

    app.get('/login/facebook/return',
        passport.authenticate('facebook', { failureRedirect: '/login' }),
        function(req, res) {
            res.redirect('/');
        });*/

};
