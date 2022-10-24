const { src, dest, parallel, series } = require("gulp");

const concat = require("gulp-concat");

const uglify = require("gulp-uglify-es").default;

const autoprefixer = require("gulp-autoprefixer");

const cleancss = require("gulp-clean-css");

function scripts() {
  return src(["app/js/app.js"])
    .pipe(concat("app.min.js"))
    .pipe(uglify())
    .pipe(dest("app/js/"));
}

function styles() {
  return src(["app/css/app.css"])
    .pipe(concat("app.min.css"))
    .pipe(
      autoprefixer({ overrideBrowserslist: ["last 10 versions"], grid: true })
    )
    .pipe(
      cleancss({
        level: { 1: { specialComments: 0 } },
      })
    )
    .pipe(dest("app/css/"));
}

function buildcopy() {
  return src(
    [
      "app/css/**/*.min.css",
      "app/js/**/*.min.js",
      "app/**/*.html",
      "app/images/**/*",
    ],
    {
      base: "app",
    }
  ).pipe(dest("dist"));
}

exports.scripts = scripts;

exports.default = parallel(styles, scripts);

exports.styles = styles;

exports.build = series(styles, scripts, buildcopy);
