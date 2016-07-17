var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');



gulp.task('styles', function() {
	gulp.src('sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers:['> 1%'],
			cascade: false
		}))
		.pipe(gulp.dest('./css'))
		
});
gulp.task('watch', ['styles'], function() {
	gulp.watch('sass/*.scss', ['styles']);
});
gulp.task('minify-css', function() {
  gulp.src('css/style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./min.css'));
});