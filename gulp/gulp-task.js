const gulp = require('gulp')
const minifyCss = require('gulp-minify-css')
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate')
const htmlmin = require('gulp-htmlmin')

const options = {
  removeComments: true,//清除HTML注释
  collapseWhitespace: true,//压缩HTML
  collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
  removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
  removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
  removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
  minifyJS: true,//压缩页面JS
  minifyCSS: true//压缩页面CSS
}

gulp.task('default', () => {
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'))
  gulp.src('src/css/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css/'))
  gulp.src('src/*.html')
    .pipe(htmlmin(options))
    .pipe(gulp.dest('dist/'))
})
