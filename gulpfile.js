var gulp = require("gulp");
var less = require("gulp-less");
var prefixer = require("gulp-autoprefixer");

gulp.task("default", function() {
	gulp.watch("./src/**.less", ["less"]);
});

gulp.task("less", function() {
	gulp.src(["./src/flex-layout.less"])
		.pipe(less())
		.pipe(prefixer())
		.pipe(gulp.dest("./dist"));
});