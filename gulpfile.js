const gulp = require ('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS     = require('gulp-clean-css');
const rename = require('gulp-rename');


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

return gulp.src("./css/mystyle.css")

.pipe(rename({suffix: ".min"}))

.pipe(cleanCSS())

.pipe(gulp.dest("./css"));

});
