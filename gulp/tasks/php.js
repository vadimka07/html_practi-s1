module.exports = function() {
  $.gulp.task("php", function() {
    return $.gulp
      .src("app/php/*.php") //Выберем файлы по нужному пути
      .pipe($.gulp.dest("../shoppingMedia/")) //Выплюнем их в папку dist
      .pipe($.bs.reload({ stream: true })); //И перезагрузим наш сервер для обновлений
  });
};
