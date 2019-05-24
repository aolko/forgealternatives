const gulp = require('gulp');
const jsonConcat = require("gulp-json-concat");


function defaultTask(cb) {
    console.log("Concating all json files");
        gulp.src('json/**/*.json')
        .pipe(jsonConcat('mods.json',function(data){
            const array = Object.keys(data).map(filename => data[filename]);
            return new Buffer(JSON.stringify(array));
        }))
        .pipe(gulp.dest('public'));
    cb();
}

exports.default = defaultTask;
