module.exports = function() {
  $.gulp.task("pug", function() {
    return $.gulp
      .src("app/pug/pages/*.pug") // Выберем файлы по нужному пути
      .pipe(
        $.gp.pug({
          pretty: true
        })
      )
      .pipe($.gulp.dest("dist/")) //Выплюнем их в папку dist
      .on("end", $.bs.reload); // И перезагрузим наш сервер для обновлений
  });
};
