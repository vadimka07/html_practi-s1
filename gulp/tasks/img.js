module.exports = function() {
  $.gulp.task("img", function() {
    return $.gulp
      .src("app/static/img/*.*") //Выберем файлы по нужному пути
      .pipe($.gulp.dest("dist/images/")) //Выплюнем их в папку dist
      .pipe($.bs.reload({ stream: true })); //И перезагрузим наш сервер для обновлений
  });

  $.gulp.task("fonts", function() {
    return $.gulp
      .src("app/static/fonts/**/*.*") //Выберем файлы по нужному пути
      .pipe($.gulp.dest("dist/fonts/")) //Выплюнем их в папку dist
      .pipe($.bs.reload({ stream: true })); //И перезагрузим наш сервер для обновлений
  });
};
