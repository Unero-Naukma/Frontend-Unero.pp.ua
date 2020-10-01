const gulp = require("gulp");
const less = require("gulp-less");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const mqpacker = require("css-mqpacker");
const minify = require("gulp-csso");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const svgstore = require("gulp-svgstore");
const svgmin = require("gulp-svgmin");
const del = require("del");
const webpack = require("webpack-stream");
const browsersync = require("browser-sync");

const dist = "./markup/dist/";

gulp.task("copy-html", () => {
  return gulp.src("./markup/src/index.html")
    .pipe(gulp.dest(dist))
    .on("end", browsersync.reload);
});

gulp.task("build-styles", () => {
  return gulp.src("./markup/src/assets/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      mqpacker({
        sort: true
      })
    ]))
    .pipe(gulp.dest("./markup/dist/assets/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("./markup/dist/assets/css"))
    .pipe(browsersync.stream());
});

gulp.task("build-js", () => {
  return gulp.src("./markup/src/js/main.js", {allowEmpty: true})
    .pipe(webpack({
      mode: 'development',
      output: {
        filename: 'script.js'
      },
      watch: false,
      devtool: "source-map",
      module: {
        rules: [{
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  debug: true,
                  corejs: 3,
                  useBuiltIns: "usage"
                }]
              ]
            }
          }
        }]
      }
    }))
    .pipe(gulp.dest(dist + 'js'))
    .on("end", browsersync.reload);
});

gulp.task("build-prod-js", () => {
  return gulp.src("./markup/src/js/main.js")
    .pipe(webpack({
      mode: 'production',
      output: {
        filename: 'script.js'
      },
      module: {
        rules: [{
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  corejs: 3,
                  useBuiltIns: "usage"
                }]
              ]
            }
          }
        }]
      }
    }))
    .pipe(gulp.dest(dist + 'js'));
});

gulp.task("optimize-images", function () {
  return gulp.src("./markup/dist/assets/img/**/*.{png, jpg, gif}")
    .pipe(imagemin([
      imagemin.gifsicle({
        interlaced: true
      }),
      imagemin.mozjpeg({
        quality: 75,
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 3,
        progressive: true
      })
    ]))
    .pipe(gulp.dest("./markup/dist/assets/img"));
});

gulp.task("optimize-symbols", function () {
  return gulp.src("./markup/dist/assets/img/icons/*.svg")
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("symbols.svg"))
    .pipe(gulp.dest("./markup/dist/assets/img/icons"));
});

gulp.task("copy-assets", () => {
  return gulp.src([
      "./markup/src/assets/fonts/**/*.{woff,woff2}",
      "./markup/src/assets/img/**",
    ], {
      base: "./markup/src/assets"
    })
    .pipe(gulp.dest(dist + "/assets"))
    .on("end", browsersync.reload);
});

gulp.task("clean", function () {
  return del(dist);
});

gulp.task("build", gulp.series(
  "clean",
  "copy-html",
  "copy-assets",
  "build-styles",
  "build-js",
  "optimize-images",
  "optimize-symbols"
));

gulp.task("watch", function () {
  browsersync.init({
    server: "./markup/dist/",
    port: 4001,
    notify: true
  });

  gulp.watch("./markup/src/index.html", gulp.parallel("copy-html"));
  gulp.watch(["./markup/src/assets/fonts/**/*.{woff,woff2}", "./src/assets/img/**"], () => {
    gulp.series(
      "copy-assets",
      "optimize-images",
      "optimize-symbols",
      browsersync.reload()
    );
  });
  gulp.watch("./markup/src/assets/less/*.less", gulp.parallel("build-styles"));
  gulp.watch("./markup/src/js/**/*.js", gulp.parallel("build-js"));
});

gulp.task("default", gulp.parallel("watch", "build"));