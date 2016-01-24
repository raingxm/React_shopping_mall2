var gulp = require('gulp');

gulp.task('build', ['copyData','copyImgs','browserify', 'markup', 'less']);
