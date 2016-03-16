'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat'); //concatena
var uglify = require('gulp-uglify'); //minifica
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');

var BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('jsTask', function(){
    gulp.src('api/controllers/*.js')
        .pipe(uglify())
        .pipe(gulp.dest("./dist/controllers/"))
});

gulp.task('nodemon', function(cb){

    var called = false;

    return nodemon({

        //app file
        script : 'server.js',
        reloadDelay: 1000,
        //watch core server file that require server restart on change
        watch: ['server.js']
    })
        .on('start', function onStart(){
            //we make sure start only got called once
            console.log("START nodemon");
            if(!called){
                cb();
            }
            called = true;
        })
        .on('restart', function onRestart(){
            console.log("RESTART nodemon");
            setTimeout(function reload(){
                browserSync.reload({
                    stream : false
                }, BROWSER_SYNC_RELOAD_DELAY);
            })
        })

});

gulp.task('browser-sync', ['nodemon'], function(){
    browserSync({
        proxy : 'http://localhost:8080',

        port : 4000,

        browser : ['google-chrome']
    })
});

gulp.task('js', function(){
    gulp.src('api/controllers/*.js')
        .pipe(uglify())
        .pipe(gulp.dest("./dist/controllers/"))
});

gulp.task('bs-reload', function(){
    browserSync.reload();
});

/*gulp.task('css', function(){
    return gulp.src('public/!**!/!*.css')
        .pipe(browserSync.reload({ stream : true}))
});*/

gulp.task('default', ['js', 'browser-sync'], function(){
    gulp.watch('public/**/*.js', ['js', browserSync.reload()]);
    //gulp.watch('public/**/*.css', ['css']);
    //gulp.watch('public/**/*.html', ['bs-reload'])
});