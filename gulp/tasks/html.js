module.exports = function() {
  $.gulp.task("html", function() {
    return $.gulp
      .src("app/html/*.html") //Выберем файлы по нужному пути
      .pipe($.gulp.dest("dist/")) //Выплюнем их в папку dist
      .pipe($.bs.reload({ stream: true })); //И перезагрузим наш сервер для обновлений
  });
};
