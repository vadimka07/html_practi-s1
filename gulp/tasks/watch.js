module.exports = function() {
  $.gulp.task("watch", function() {
    $.gulp.watch("app/html/**/*.html", $.gulp.series("html")); //наблюдение за файлами html
    $.gulp.watch("app/static/img/**/*.*", $.gulp.series("img")); //наблюдение за файлами images
    $.gulp.watch("app/static/fonts/**/*.ttf", $.gulp.series("fonts")); //наблюдение за файлами fonts
    $.gulp.watch("app/static/stylus/**/*.styl", $.gulp.series("stylus")); //наблюдение за всеми файлами  Stylus которые хранятся в папке Stylus или глубже
    $.gulp.watch("app/static/js/script.js", $.gulp.series("scripts")); //наблюдение за всеми файлами  js которые хранятся в папке js
    //$.gulp.watch("app/php/**/*.php", $.gulp.series("php")); //наблюдение за файлами php
    // $.gulp.watch("app/pug/**/*.pug", $.gulp.series("pug")); //наблюдение за файлами pug
  });
};
