var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('watch', function(){
    gulp.watch('./public/js/*.js', ['js']);
    gulp.watch('./public/js/controllers/*.js', ['js']);
});

gulp.task('webserver', function(){
    connect.server({
        root : './server.js',
        hostname : '127.0.0.1',
        port : 9000,
        livereload : true
    })
});

gulp.task('default', ['webserver']);