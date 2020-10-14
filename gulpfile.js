'use strict';

var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    notify        = require('gulp-notify'),
    livereload    = require('gulp-livereload'),
    autoprefixer  = require('gulp-autoprefixer'),
    rename        = require('gulp-rename');

var autoprefixerOptions = {
      "overrideBrowserslist": [
            "defaults",
            "not IE 11",
            "not IE_Mob 11",
            "maintained node versions"
      ]
};

function handleErrors() {
      notify.onError({
            message: "error: <%= error %>",
            title: "Compile Error"
      }).apply(this, args);

      this.emit('end');
};

gulp.task('sass_styles', function() {
      return gulp.src('app/assets/stylesheets/styles.scss')
            .pipe(sass({outputStyle:'expanded'}))
            .on('error', handleErrors)
            .pipe(autoprefixer(autoprefixerOptions))
            .pipe(gulp.dest('app/assets/stylesheets'))
});

gulp.task('watch', function() {
      livereload.listen();
      gulp.watch('app/assets/stylesheets/styles.scss', gulp.series('sass_styles'));
})
