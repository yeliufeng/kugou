//配置gulp文件
var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    scss = require('gulp-sass');
//静态服务器监听scss、html文件
gulp.task('serve', ['scss'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch("assets/scss/*.scss", ['scss']);
    gulp.watch("*.html").on('change', reload);
});
//scss编译后的css传递到浏览器实现更新
gulp.task('scss', function() {
    return gulp.src("assets/scss/*.scss")
        .pipe(scss({ outputStyle: 'expend' }).on('error', scss.logError))
        .pipe(gulp.dest("assets/css"))
        .pipe(reload({ stream: true }));
});
gulp.task('default', ['serve']);