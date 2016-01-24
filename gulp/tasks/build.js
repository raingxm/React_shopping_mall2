var gulp = require('gulp');

gulp.task('build', ['copyData','browserify', 'markup', 'less']);
