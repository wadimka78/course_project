
const {src, dest, watch, series} = require('gulp'),
    browserSync = require('browser-sync').create(),
    cleanCSS = require('gulp-clean-css'),
   // minify = require('gulp-minify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer');
// Static server
function bs() {
    serveSass();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.html").on('change', browserSync.reload);
    watch("./sass/**/*.sass", serveSass);
    watch("./scss/**/*.scss", serveSass);
    watch("./js/*.js").on('change', browserSync.reload);
};
// Compile sass into CSS & auto-inject into browsers
function  serveSass() {
    return src("./sass/**/*.sass", "./scss/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};
function  buildCSS(done) {
    src('./css/**/**.css', './css/**/**.min.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('dist/css'))
    done();
}
//function  buildJs(done) {
  //  src(['./js/**/**.js', './js/**/**.min.js'])
    //.pipe(minify())
   // .pipe(dest('dist/js'))
    //done();
//}

exports.serve = bs;
exports.build = series(buildCSS);

// Минимизация CSS и добавление к ним .min

/* gulp.task('mincss', function() {
    return src("./css/mystyle.css")
    .pipe(rename({suffix: ".min"}))
    .pipe(cleanCSS())
    .pipe(dest("./css"));
    }); */