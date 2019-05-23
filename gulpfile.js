const gulp = require('gulp');
const jsonConcat = require("gulp-json-concat");


function defaultTask(cb) {
        console.log("Concating all json files");
        gulp.src('json/**/*.json')
        .pipe(jsonConcat('mods.json',function(data){
            return new Buffer(JSON.stringify(data));
        }))
        .pipe(gulp.dest('public'));
    cb();
}

exports.default = defaultTask;
