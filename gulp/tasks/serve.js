module.exports = function() {
  $.gulp.task("serve", function() {
    $.bs.init({
      server: {
        baseDir: "./dist"
      }
      // proxy: {
      //   target: "http://shoping.local"
      // }
    });
    //browserSync.watch("dist", browserSync.reload);
  });
};
