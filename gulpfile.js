var gulp    = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass    = require ('gulp-sass');
    //babel   = require('gulp-babel');

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "01 - JavaScript Drum Kit",
        port: 1500
    });

    gulp.watch("01 - JavaScript Drum Kit/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("01 - JavaScript Drum Kit/*.html").on('change', browserSync.reload);
    gulp.watch("01 - JavaScript Drum Kit/*.js").on('change', browserSync.reload);
});

gulp.task("sass", function(){
  return gulp.src('01 - JavaScript Drum Kit/*.scss')
  .pipe(sass({ outputStyle: 'compressed'}))
  .pipe(gulp.dest('01 - JavaScript Drum Kit/'));
});

gulp.task('default', ['serve', 'sass']);
