var gulp = require('gulp');
var sass = require('gulp-sass');

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
