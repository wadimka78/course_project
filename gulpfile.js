const gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename');

// Static server
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Минимизация CSS и добавление к ним .min

gulp.task('mincss', function () {

    return gulp.src("./css/mystyle.css")

        .pipe(rename({
            suffix: ".min"
        }))

        .pipe(cleanCSS())

        .pipe(gulp.dest("./css"));

});