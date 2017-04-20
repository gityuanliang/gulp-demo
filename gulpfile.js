/**
 * Created by Administrator on 2017-04-19.
 */
//��gulp������gulp�İ�
var gulp=require('gulp');
var less=require('gulp-less');
var cssnano=require('gulp-cssnano');
var htmlmin = require('gulp-htmlmin');
var browserSync = require("browser-sync");
//��������
gulp.task('style',function(){
    //��������ִ��style����ʱ���Զ�ִ�е�
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
        //֪ͨˢ��
        .pipe(browserSync.reload({
            stream: true
        }));
});
gulp.task('serve',function(){
    browserSync({
        server: {
            //ָ����Ŀ¼
            baseDir:['dist']
        }
    }, function(err, bs) {
        console.log(bs.options.getIn(["urls", "local"]));
    });
    //��Ӽ���
    gulp.watch('src/*.less',['style']);
    gulp.watch('*.html',['minify']);

});
