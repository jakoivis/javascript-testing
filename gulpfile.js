
var releaseName = 'canvasfw';

var unminifiedFileName = releaseName + '.js';
var minifiedFileName = releaseName + '.min.js';

var mainSourceFile = './src/canvasfw.js';
var sourceFiles = './src/*.js';
var testFiles = './test/*.test.js';
var testHelperFiles = './test/helpers/*.js';
var imageFiles = './test/assets/*.png';
var buildFolder = './build/';

var gulp = require('gulp');
var karma = require('gulp-karma');

var karmaSingleRunOptions = { configFile: 'karma.conf.js', action: 'run' };

gulp.task('test', function() {

    var karmaOptions = {
        configFile: './karma.conf.js',
        action: "run"
    };

    return gulp.src('./test/**/*.js')
        .pipe(karma(karmaOptions))
        .on('end', function () {
        });
});

gulp.task('default', ['scripts'], function() {

});
