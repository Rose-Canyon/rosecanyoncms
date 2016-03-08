var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var reload = browserSync.reload;

gulp.task('sass', function(){
  return gulp.src('public/stylesheets/scss/styles.scss')
    .pipe(sass())
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    .pipe(gulp.dest('public/stylesheets'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


gulp.task('watch', ['vendor', 'sass'], function (){
  gulp.watch('public/stylesheets/scss/*.scss', ['sass']);
  gulp.watch('bower_components/*', ['vendor']);
  // gulp.watch('scss/**/*.css', ['sass']);
  // gulp.watch("*.liquid").on("change", reload);
  // gulp.watch('index.html', ['reload']);
  // Other watchers
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: ''
    },
  })
});


gulp.task('vendor', function() {
  return gulp.src([
    'bower_components/jquery/dist/jquery.js',
    'bower_components/jquery-easing/jquery.easing.js',
    'bower_components/fittext/fittext.js',
    'bower_components/wow/dist/wow.js',
    'bower_components/bootstrap/dist/js/bootstrap.js'
  ]).pipe(concat('vendor.js'))
    .pipe(gulp.dest('public/javascripts'));
});
