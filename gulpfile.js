var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var runSequence = require('run-sequence');
var babel = require("gulp-babel");

// CSS Tasks
gulp.task('css-compile', function() {
  gulp.src('public/css/main.scss')
    .pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      grid: true,
      cascade: false
    }))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('css-minify', function() {
    gulp.src(['./build/css/*.css', '!build/css/*.min.css'])
      .pipe(cssmin())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('./build/css'));
});

gulp.task('css', function() {
  gulp.src('public/css/main.scss')
    .pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      grid: true,
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./build/css/'));

});

// JavaScript Tasks WIP
gulp.task('js-build', function() {
  gulp.src('public/js/**/*.js')
  .pipe(babel())
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('./build/js'));
});

gulp.task('js-minify', function() {
  gulp.src('./build/js/scripts.js')
    .pipe(minify({
      ext:{
        // src:'.js',
        min:'.min.js'
      },
      noSource: true,
    }))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('js', function() {
  gulp.src('public/js/**/*.js')
  .pipe(babel())
  .pipe(concat('scripts.js'))
    .pipe(minify({
      ext:{
        // src:'.js',
        min:'.min.js'
      },
      noSource: true,
    }))
  .pipe(gulp.dest('./build/js'));

});

// Image Compression WIP
gulp.task('img-compression', function() {
  gulp.src('public/img/*')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(gulp.dest('./build/img'));
});

// Build frontend stuff
gulp.task('default', function() {
  runSequence('css', 'js');
});

// Watch on CSS and JS
gulp.task('watch', function() {
  gulp.watch("public/css/**/*.scss", ['css']);
  gulp.watch("public/js/**/*.js", ['js']);
});
