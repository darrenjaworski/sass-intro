const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require("gulp-sass");

const paths = ["./app", "./app-demo"];
let usePath = paths[1];

gulp.task("serve", ["sass"], () => {
  browserSync.init({ server: usePath });

  gulp.watch(usePath + "/scss/**/*.scss", ["sass"]);
  gulp.watch(usePath + "/**/*.html").on("change", browserSync.reload);
});

gulp.task("sass", () => {
  return gulp
    .src(usePath + "/scss/**/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(gulp.dest(usePath + "/css"))
    .pipe(browserSync.stream());
});

gulp.task("default", ["serve"]);
