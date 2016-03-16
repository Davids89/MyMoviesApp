var gulp = require('gulp');
var concat = require('gulp-concat'); //concatena
var uglify = require('gulp-uglify'); //minifica
var nodemon = require('gulp-nodemon');

gulp.task('serve', ['start', 'jsTask']);

gulp.task('jsTask', function(){
    gulp.src('api/controllers/*.js')
        .pipe(uglify())
        .pipe(gulp.dest("./dist/controllers/"))
});

gulp.task('start', function(){
    nodemon({
        script: 'server.js'
    })
});