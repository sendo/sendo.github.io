'use strict';

var gulp = require('gulp');
var uncss = require('gulp-uncss');
var htmlbeautify = require('gulp-html-beautify');
var csso = require('gulp-csso');
var csscomb = require('gulp-csscomb');
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
 
gulp.task('uncss', function () {
    return gulp.src('css/main.css')
        .pipe(uncss({
            html: ['index.html']
        }))
        .pipe(gulp.dest('./out'));
});

gulp.task('htmlbeautify', function() {
 return gulp.src('index.html')
    .pipe(htmlbeautify({indent_size: 2}))
    .pipe(gulp.dest('./out'))
});

gulp.task('image-min', () =>
    gulp.src('./images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./out'))
); 

gulp.task('autoprefixer', () =>
    gulp.src('./css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./out'))
);

gulp.task('css-nano', function() {
    return gulp.src('./css/main.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./out'));
});