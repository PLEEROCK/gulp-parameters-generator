var gulp = require('gulp');
var parametersGenerator = require('../index.js');

gulp.task('generate-parameters', function() {
    return gulp.src('./parameters.json.dist')
        .pipe(parametersGenerator())
        .pipe(gulp.dest('./'));
});