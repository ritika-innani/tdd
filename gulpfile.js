var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
let sourcemaps = require("gulp-sourcemaps");

function tsc1() {
  return tsProject.src()
      .pipe(sourcemaps.init())
      .pipe(tsProject())
      .js.pipe(sourcemaps.write('.')).pipe(gulp.dest('.'));
}

function tsc() {
  return tsProject.src()
      .pipe(tsProject())
      .js.pipe(gulp.dest("dist"));
}
exports.tsc = tsc;
