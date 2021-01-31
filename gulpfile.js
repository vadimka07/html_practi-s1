"use sctrict";

//Глабальное подключение плагинов, которые мы будем вызывать из отедльной диреткории

global.$ = {
  gulp: require("gulp"), //подклчаем сам gulp 4.0
  gp: require("gulp-load-plugins")(), // плагин для вызова используемых плагинов в проекте
  bs: require("browser-sync").create(), //подключаем плагин для синхронизации с брауезром
  gcmq: require('gulp-group-css-media-queries'),//Группируем медиазапросы
  // babel: require('gulp-babel'),

  path: {
    tasks: require("./gulp/config/tasks.js") //путь к конфиг файлу, где хранятся пути к таскам
  }
};

$.path.tasks.forEach(taskPath => {
  require(taskPath)(); //перебираем таски для запуска
});

$.gulp.task(
  "default",
  $.gulp.series(
    $.gulp.parallel("html", "stylus", "scripts", "scripts-lib", "img", "fonts", /*"php"*/), //паральеный запуск тасок
    $.gulp.parallel("watch", "serve") //паральеный запуск тасок, иначе будет работать только watch
  )
);
