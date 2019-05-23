const gulp = require('gulp');


function defaultTask(cb) {
    // place code for your default task here
    var merge = require('gulp-merge-json');

    /**
     * Basic functionality
     */
    gulp.src('json/**/*.json')
        .pipe(merge({
            fileName: 'mods.json'
        }))
        .pipe(gulp.dest('./public'));
    cb();
}

exports.default = defaultTask;
