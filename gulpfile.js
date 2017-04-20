/**
 * Created by Administrator on 2017-04-19.
 */
//在gulp中载入gulp的包
var gulp=require('gulp');
var less=require('gulp-less');
var cssnano=require('gulp-cssnano');
var htmlmin = require('gulp-htmlmin');
var browserSync = require("browser-sync");
//创建任务
gulp.task('style',function(){
    //这里是在执行style任务时候自动执行的
    gulp.src('src/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/style'))
        .pipe(browserSync.reload({
            stream: true
        }));
});
gulp.task('minify', function() {
    return gulp.src('*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'))
        //通知刷新
        .pipe(browserSync.reload({
            stream: true
        }));
});
gulp.task('serve',function(){
    browserSync({
        server: {
            //指定根目录
            baseDir:['dist']
        }
    }, function(err, bs) {
        console.log(bs.options.getIn(["urls", "local"]));
    });
    //添加监听
    gulp.watch('src/*.less',['style']);
    gulp.watch('*.html',['minify']);

});
