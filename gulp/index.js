var gulp = require('gulp');
var server = require('gulp-server-livereload');

require('./task/server.js');

gulp.task('default', [
    'server'
]);