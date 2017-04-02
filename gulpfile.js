const CSS_FILE = 'doneto.css',
      MIN_FILE = 'doneto.min.css',
      PATH     = {
          scss : './scss',
          css  : './css',
          min  : './css'
};

var gulp    = require('gulp'),
    sass    = require('gulp-ruby-sass'),
    cssnano = require('gulp-cssnano'),
    rename  = require('gulp-rename'),
    notify  = require('gulp-notify');

gulp.task('css', function() {
  return sass(PATH.scss + '/*.scss', { style: 'expanded' })
    .pipe(gulp.dest(PATH.css))
    .pipe(notify({message: 'CSS generated.'}));
});

gulp.task('minify', function() {
    return gulp.src(PATH.css + '/' + CSS_FILE)
        .pipe(rename({suffix: '.min'}))
        .pipe(cssnano())
        .pipe(gulp.dest(PATH.min))
        .pipe(notify({message: 'Minified CSS generated.'}));
});