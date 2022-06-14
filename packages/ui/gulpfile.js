/* eslint-disable @typescript-eslint/no-var-requires */

const gulp = require('gulp');
const less = require('gulp-less');
const del = require('del');
const path = require('path');
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const tsconfig = require('./tsconfig.json');

function clean() {
  return del('./lib/**');
}

function buildStyle() {
  return gulp
    .src(['./src/**/*.less'], {
      base: './src/',
      ignore: ['**/tests/**/*'],
    })
    .pipe(
      less({
        paths: [path.resolve(__dirname, 'src')],
      })
    )
    .pipe(gulp.dest('./lib/es'))
    .pipe(gulp.dest('./lib/cjs'));
}

function buildAssets() {
  return gulp.src(['./src/**/assets/*']).pipe(gulp.dest('./lib/es')).pipe(gulp.dest('./lib/cjs'));
}

function buildES() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ES6',
  });
  return gulp
    .src(['./src/**/*.{ts,tsx}'], {
      ignore: ['**/tests/**/*', '**/pages/**/*', '*/app.config.ts', '*/app.ts', '*/app.less'],
    })
    .pipe(tsProject)
    .pipe(
      babel({
        plugins: ['./babel-transform-less-to-css'],
      })
    )
    .pipe(gulp.dest('./lib/es'));
}

exports.default = gulp.series(clean, buildAssets, buildStyle, buildES);
