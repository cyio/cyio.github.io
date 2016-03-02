(function(){
    'use strict';    
    var gulp = require('gulp'),
        jade = require('gulp-jade'),
        uglify = require('gulp-uglify'),
        browsersync = require('browser-sync'),
        dest = require('gulp-dest'),
        cleanCSS = require('gulp-clean-css'),
        reload = browsersync.reload,
        paths = {
            root: './',
            build: {
                root: './',
                images: './img',
                styles: './css',
                scripts: './js',
            },
            source: {
                root: './src/',
                styles: './src/css/',
                scripts: './src/js/*.js',
                templates: './src/*.jade',
                images: './src/img/*'
            }
          };
          
    gulp.task('browsersync', function() {
        browsersync({
            files: [paths.build.root],
            server: {
                baseDir: "./"
            },
            open: false,
            host: "127.0.0.1"
            });
    });
    
    gulp.task('sass', function () {
      return sass(paths.source.root + '/css/*.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest(paths.build.styles))
        .pipe(reload({stream:true}));
    });
    
    gulp.task('templates', function() {
      gulp.src(paths.source.templates)
        .pipe(jade({
          pretty: true
        }))
        .pipe(gulp.dest(paths.build.root))
        .pipe(reload({stream:true}));
    });
    
    gulp.task('images', function () {
        gulp.src(paths.source.images)
            .pipe(gulp.dest(paths.build.images));
    });
    
    gulp.task('css', function () {
        gulp.src('./src/css/*.css')
            .pipe(cleanCSS())
            .pipe(gulp.dest(paths.build.styles));
    });
    
    gulp.task('scripts', function () {
        return gulp.src(paths.source.scripts)
            .pipe(uglify())
            .pipe(gulp.dest(paths.build.scripts))
            .pipe(reload({stream:true}));
    });
    
    gulp.task('build', ['scripts', 'css', 'templates']);
    
    gulp.task('server', [ 'browsersync', 'build', 'watch']);

    gulp.task('default', [ 'server' ]);
    
    gulp.task('watch', function () {
        gulp.watch(paths.source.scripts, [ 'scripts' ]);
        gulp.watch(paths.source.styles + '*.css', [ 'styles' ]);
        gulp.watch(paths.source.templates, [ 'templates' ]);
    });
})();        