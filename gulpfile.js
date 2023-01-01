"use strict";

const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

// Task 1
gulp.task('minify-css', () => {
    return gulp.src('./css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('css-min'));
  });