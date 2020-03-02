const gulp = require ('gulp');
const browserSync = require('browser-sync').create();

gulp.task('hello', function(done) {
   console.log('Привет, тебе, о мир!');
   done();
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Минимизация CSS и добавление к ним .min

var gulp         = require('gulp');

var browserSync  = require('browser-sync').create();

var sass         = require('gulp-sass');

var autoprefixer = require('gulp-autoprefixer');

var concatCss    = require('gulp-concat-css');

var cleanCSS     = require('gulp-clean-css');

var rename       = require("gulp-rename");

gulp.task('serve', ['sass'], function() {

browserSync.init({

server: "src/"

});

gulp.watch("src/sass/*.sass", ['sass']);

gulp.watch("src/*.html").on('change', browserSync.reload);

});

gulp.task('sass', function() {

return gulp.src("src/sass/*.sass")

.pipe(sass().on('error', sass.logError))

.pipe(autoprefixer({

browsers: ['last 2 versions'],

cascade: false

}))

.pipe(concatCss("style.css"))

.pipe(gulp.dest("src/css"))

.pipe(browserSync.stream());

});

gulp.task('mincss', function() {

return gulp.src("src/css/*.css")

.pipe(rename({suffix: ".min"}))

.pipe(cleanCSS())

.pipe(gulp.dest("app/css"));

})