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
      ignore: ['**/demos/**/*', '**/tests/**/*', '**/pages/**/*', '**/app.less', '**/index.html'],
    })
    .pipe(
      less({
        paths: [path.resolve(__dirname, 'src')],
      })
    )
    .pipe(gulp.dest('./lib/es'))
    .pipe(gulp.dest('./lib/cjs'));
}

function copyAssets() {
  return gulp
    .src(['./src/**/assets/*'], {
      ignore: ['**/demos/**/*', '**/tests/**/*', '**/pages/**/*'],
    })
    .pipe(gulp.dest('./lib/es'))
    .pipe(gulp.dest('./lib/cjs'));
}

function buildES() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ES2022',
  });
  return (
    gulp
      .src(['src/**/*.{ts,tsx}'], {
        ignore: [
          '**/demos/**/*',
          '**/tests/**/*',
          '**/pages/**/*',
          '**/app.ts',
          '**/app.less',
          '**/app.config.ts',
          '**/index.html',
        ],
      })
      .pipe(tsProject)
      // .pipe(
      //   babel({
      //     plugins: ['./babel-transform-less-to-css'],
      //   })
      // )
      .pipe(gulp.dest('./lib/es'))
  );
}

function buildCJS() {
  return gulp
    .src(['lib/es/**/*.js'])
    .pipe(
      babel({
        plugins: ['@babel/plugin-transform-modules-commonjs'],
      })
    )
    .pipe(gulp.dest('lib/cjs/'));
}

function copyMetaFiles() {
  return gulp.src(['./README.md', './LICENSE']).pipe(gulp.dest('./lib/'));
}

function buildDeclaration() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ES6',
    declaration: true,
    emitDeclarationOnly: true,
  });
  return gulp
    .src(['src/**/*.{ts,tsx}'], {
      ignore: ['**/demos/**/*', '**/tests/**/*', '**/pages/**/*', '**/app.ts', '**/app.config.ts', '**/index.html'],
    })
    .pipe(tsProject)
    .pipe(gulp.dest('lib/es/'))
    .pipe(gulp.dest('lib/cjs/'));
}

exports.default = gulp.series(
  clean,
  buildES,
  buildCJS,
  gulp.parallel(buildDeclaration, buildStyle),
  copyAssets,
  copyMetaFiles
);
