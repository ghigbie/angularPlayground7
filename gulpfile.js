const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minifyCss = require('gulp-minify-css');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

let DIST_PATH = 'public/dist';
let SCRIPTS_PATH = 'public/scripts/**/*.js';
let STYLES_PATH = 'public/css/**/*.cs';
