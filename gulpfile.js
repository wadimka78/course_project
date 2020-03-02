const gulp = require ('gulp');
const browserSync = require('browser-sync').create();
var cleanCSS     = require('gulp-clean-css');


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

gulp.task('mincss', function() {

return gulp.src("/css/*.css")

.pipe(rename({suffix: ".min"}))

.pipe(cleanCSS())

.pipe(gulp.dest("/css"));

})