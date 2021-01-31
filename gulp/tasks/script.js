module.exports = function() {
  $.gulp.task("scripts-lib", function() {
    return $.gulp
      .src([
        // "node_modules/jquery/dist/jquery.min.js",
        // "node_modules/slick-carousel/slick/slick.min.js"
        "node_modules/swiper/swiper-bundle.min.js"
      ]) //путь расположения файлов библиотек jquery
      .pipe($.gp.concat("libs.min.js"))
      .pipe($.gulp.dest("dist/js/"))
      .pipe(
        $.bs.reload({
          stream: true
        })
      );
  });

  $.gulp.task("scripts", function () {
    return $.gulp
      .src(
        "app/static/js/script.js"
        // ['node_modules/babel/polyfill/dist/polyfill.js',
        // ]
      ) //путь расположения основного файла js
      .pipe($.gp.babel({
        presets: ["@babel/env"],
        plugins: ["@babel/plugin-transform-object-assign"],
        // presets: ['es2015'], // transform ES6 to ES5 with Babel

      }))
      .pipe($.gulp.dest("dist/js/")) //Выплюнем их в папку dist
      .pipe(
        $.bs.reload({
          stream: true
        })
      );
  });
};
