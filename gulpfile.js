var gulp = require('gulp');
var karma = require('gulp-karma');

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