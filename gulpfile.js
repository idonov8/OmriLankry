var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watch = require('gulp-watch');
var gutil = require('gulp-util');
var browserify = require('browserify');
var babel = require('gulp-babel');

gulp.task('transform', function() {
    return gulp.src('./app/src/**/*.jsx')
        .pipe(babel({
            presets: ["react", "es2015"]
        }))
        .pipe(gulp.dest('./app/dist'));
})

gulp.task('js', ['transform'], function() {
    // Assumes a file has been transformed from
    // ./app/src/main.jsx to ./app/dist/main.js
    return browserify('./app/dist/main.js')
        .bundle()
        .on('error', gutil.log)
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./'))
});

gulp.task('default', ['js'], function() {
    gulp.watch('./app/**/*.jsx', ['js']);
});