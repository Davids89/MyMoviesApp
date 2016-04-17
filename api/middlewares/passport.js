var User = require('../models/User.js');
var constants = require('../helpers/constants.js');
var facebookStrategy = require('passport-facebook').Strategy;
var localStrategy = require('passport-local');
var crypto = require('crypto');

module.exports = function(passport){

    var algorithm = 'aes-256-ctr';

    passport.serializeUser(function(user, cb) {
        cb(null, user);
    });

    passport.deserializeUser(function(obj, cb) {
        cb(null, obj);
    });

    passport.use('local-signup', new localStrategy({
        usernameField: 'email',
        passwordField : 'password',
        passReqToCallback : true
    }, function(req, email, password, done){

        process.nextTick(function(){
            User.findOne({ 'email': email}, function(err, user){
                console.log(err, user);
                if(err) return done(err);
                if(user) return done(null, false);

                User.create({
                    email : email,
                    password : password
                });

                done(null, user);
            })
        })

    }));

    passport.use(new facebookStrategy({
        clientID : constants.facebook_id,
        clientSecret : constants.facebook_secret,
        callbackURL : constants.facebook_callback,
        profileFields : ['id', 'displayName', 'emails']
    },

        function(accessToken, refreshToken, profile, cb){

            User.find({ email : profile.emails[0].value}, function(err, user){
                if(err)
                    return err;

                console.log(user.email);

                if(user.email != undefined){
                    return cb(null, profile);
                }else{

                    console.log("entra");

                    var newUser = new User();
                    newUser.email = profile.emails[0].value;
                    newUser.password = "contraseña"; //TODO mandar correo con pass generada
                    newUser.facebook.id = profile.id;
                    newUser.facebook.email = profile.emails[0].value;
                    newUser.facebook.name = profile.displayName;
                    newUser.facebook.token = accessToken;

                    newUser.save(function(err){
                        if(err)
                            return err;
                        return cb(null, profile);
                    })
                }
            });
        }
    ));

};
