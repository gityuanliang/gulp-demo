/**
 * Created by Administrator on 2017-04-20.
 */
var gulp= require('gulp');
var less= require('gulp-less');
var cssnano= require('gulp-cssnano');
var htmlmin= require('gulp-htmlmin');
var browserSync = require("browser-sync");
gulp.task(less,function(){
    gulp.src('src/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/style'))
        .pipe(browserSync.reload({
            stream: true
        }));
});