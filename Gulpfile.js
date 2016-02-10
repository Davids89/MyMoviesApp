var gulp = require('gulp');
var server = require('gulp-express');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function(cb){

    console.log(cb);

    var started = false;

    return nodemon({
        script : 'server.js'
    }).on('start', function(){
        if(!started){
            cb();
            started = true;
        }
    })
});

gulp.task('browser-sync', ['nodemon'], function(){
   browserSync.init(null, {
       proxy: 'localhost:8080',
       files : ["public/**/*.*"],
       browser : 'google chrome',
       port : 8080
   });
});

gulp.task('default', ['browser-sync']);