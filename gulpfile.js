const gulp = require('gulp');
const del  = require('del');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minifyCss = require('gulp-minify-css');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

let DIST_PATH = 'public/dist';
let STYLES_PATH = 'public/css/**/*.cs';
let SCRIPTS_PATH = 'public/scripts/**/*.js';


//Styles
gulp.task('styles', () => {
    console.log(`Starting styles task`);
    console.log(`Ending styles task`);
});

//Scripts

gulp.task('scripts', () => {
    console.log(`Starting scripts task`);
    console.log(`Ending scripts task`);
});

//Clean
gulp.task('clean', () => {
    return del.sync([
            DIST_PATH
    ]);
});

//Default
gulp.task('default', ['styles', 'scripts'], () => {
    console.log(`Starting default task`);
});

//Export
gulp.task('export', () => {
    return gulp.src('public/**/*')
        .pipe(zip('website.zip'))
        .pipe(gulp.dest('./'));
});