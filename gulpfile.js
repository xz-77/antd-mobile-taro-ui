/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require('gulp');
const less = require('gulp-less');
const del = require('del');
const path = require('path');
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const tsconfig = require('./tsconfig.json');
const through = require('through2');
const pxMultiplePlugin = require('postcss-px-multiple')({ times: 2 });
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');

function clean() {
  return del('./lib/**');
}

function buildStyle() {
  return gulp
    .src(['./src/components/**/*.less', './src/styles/miniprogram/*.less'], {
      base: './src/',
      ignore: ['**/demos/**/*', '**/tests/**/*'],
    })
    .pipe(
      less({
        paths: [path.resolve(__dirname, 'src')],
      })
    )
    .pipe(gulp.dest('./lib/es'))
    .pipe(gulp.dest('./lib/cjs'));
}

function buildES() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ES6',
  });
  return gulp
    .src(['./src/components/**/*.{ts,tsx}', './src/utils/*.{ts,tsx}', './src/index.ts'], {
      base: './src/',
      ignore: ['**/demos/**/*', '**/tests/**/*'],
    })
    .pipe(tsProject)
    .pipe(
      babel({
        plugins: ['./babel-transform-less-to-css'],
      })
    )
    .pipe(gulp.dest('./lib/es'));
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
    .src(['./src/components/**/*.{ts,tsx}', './src/utils/*.{ts,tsx}', './src/index.ts'], {
      base: './src/',
      ignore: ['**/demos/**/*', '**/tests/**/*'],
    })
    .pipe(tsProject)
    .pipe(gulp.dest('lib/es/'))
    .pipe(gulp.dest('lib/cjs/'));
}

function init2xFolder() {
  return gulp
    .src('./lib/**', {
      base: './lib/',
    })
    .pipe(gulp.dest('./lib/2x/'));
}

function build2xCSS() {
  return (
    gulp
      .src('./lib/2x/**/*.css', {
        base: './lib/2x/',
      })
      // Hack fix since postcss-px-multiple ignores the `@supports` block
      .pipe(replace('@supports not (color: var(--adm-color-text))', '@media screen and (min-width: 999999px)'))
      .pipe(postcss([pxMultiplePlugin]))
      .pipe(replace('@media screen and (min-width: 999999px)', '@supports not (color: var(--adm-color-text))'))
      .pipe(
        gulp.dest('./lib/2x', {
          overwrite: true,
        })
      )
  );
}

function generatePackageJSON() {
  return gulp
    .src('./package.json')
    .pipe(
      through.obj((file, enc, cb) => {
        const rawJSON = file.contents.toString();
        const parsed = JSON.parse(rawJSON);
        delete parsed.scripts;
        delete parsed.devDependencies;
        delete parsed.publishConfig;
        delete parsed.files;
        delete parsed.resolutions;
        delete parsed.packageManager;
        const stringified = JSON.stringify(parsed, null, 2);
        file.contents = Buffer.from(stringified);
        cb(null, file);
      })
    )
    .pipe(gulp.dest('./lib/'));
}

exports.default = gulp.series(
  clean,
  buildES,
  buildCJS,
  gulp.parallel(buildDeclaration, buildStyle),
  copyMetaFiles,
  generatePackageJSON,
  gulp.series(init2xFolder, build2xCSS)
);
