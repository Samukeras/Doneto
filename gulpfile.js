var gulp         = require('gulp'),
    sass         = require('gulp-ruby-sass'),
    cssnano      = require('gulp-cssnano'),
    rename       = require('gulp-rename'),
    notify       = require('gulp-notify');

gulp.task('css', function() {
  return sass('./scss/*.scss', { style: 'expanded' })
    .pipe(gulp.dest('./css'))
    .pipe(notify({message: 'CSS generated.'}));
});

gulp.task('minify', function() {
    return gulp.src('./css/*.css')
        .pipe(rename({suffix: '.min'}))
        .pipe(cssnano())
        .pipe(gulp.dest('./css'))
        .pipe(notify({message: 'Minified CSS generated.'}));
});