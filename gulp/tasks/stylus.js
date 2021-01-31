module.exports = function() {
	$.gulp.task("stylus", function() {
		return $.gulp
			.src([
				"app/static/stylus/style.styl",
				"node_modules/swiper/swiper.min.css"
			]) //путь расположения основного файла стилей Stylus (в который импортируются все дочерние Stylus файлы)
			.pipe($.gp.sourcemaps.init())
			.pipe(
				$.gp.stylus({
					"include css": true
				}),
			)
			
			.pipe(
				$.gp.autoprefixer({
					overrideBrowserslist: ["last 15 versions", "> 0.1%"], //автопрефиксы для кроссбрауезрности
					cascade: true
				})
			)
			
			.on(
				"error",
				$.gp.notify.onError({
					title: "Error running Style"
				})
			)
			.pipe($.gcmq()) //Групируем медизапросы !!! В РЕЖИМЕ РАЗРАБОТКИ НУЖНО ВЫКЛЮЧАТЬ - ИСПОЛЬЗОВАТЬ ТОЛЬКО ПЕРЕД ПЕРЕНОСОМ НА ПРОД
			.pipe($.gp.csso()) //минификатор css
			.pipe($.gp.sourcemaps.init())
			.pipe($.gp.sourcemaps.write("maps"))
			.pipe($.gulp.dest("dist/css/")) //путь для компиляции CSS файла
			.pipe(
				$.bs.reload({
					stream: true
				})
			);
	});
};
