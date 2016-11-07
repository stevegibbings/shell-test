/**
 * Created by steve.gibbings on 07/11/2016.
 */
const gulp = require('gulp');
const minify = require('gulp-minify');

gulp.task('compress', function() {
  gulp.src('src/js/*.js')
    .pipe(minify({
      ext:{
        min:'.min.js'
      },
      noSource: true
    }))
    .pipe(gulp.dest('dist'))
});