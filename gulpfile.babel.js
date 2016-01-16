import gulp            from 'gulp';
import newer           from 'gulp-newer';
import uglify          from 'gulp-uglify';
import babel           from 'gulp-babel';
import eslint          from 'gulp-eslint';
import sourcemaps      from 'gulp-sourcemaps';

let server = null;

const app = {
  js: {},
  jade: {},
};

app.js.src = ['src/server/*.js', 'src/server/**/*.js'];
app.js.destPath = 'build/server';
app.js.lintSrc = Array.prototype.concat(
  app.js.src,
  [
    'gulpfile.babel.js',
    'src/*.+(js|jsx)',
    'src/**/*.+(js|jsx)',
  ]
);

app.jade.src = ['views/*.jade', 'views/**/*.jade'];

const appSrc = Array.prototype.concat(
  app.js.src,
  app.jade.src
);

gulp.task('serve', (callback) => {
  server = require('./build/server/app').default;
  callback();
});

gulp.task('end-serve', (callback) => {
  if (server) {
    server.close();
    server = null;
  }
  callback();
});

gulp.task('lint', () => {
  return gulp.src(app.js.lintSrc)
    .pipe(eslint({ rulePaths: ['./']} ))
    .pipe(eslint.format());
});

gulp.task('js-dev', () => {
  return gulp.src(app.js.src)
    .pipe(newer(app.js.destPath))
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(app.js.destPath));
});

gulp.task('js-product', () => {
  return gulp.src(app.js.src)
    .pipe(babel({
      presets: ['es2015', 'stage-2'],
    }))
    .pipe(uglify({compress: { warnings: false }}))
    .pipe(gulp.dest(app.js.destPath));
});

gulp.task('watcher-appSrc', (callback) => {
  gulp.series(
    'end-serve',
    'js-dev',
    'serve'
  )();
  callback();
});

gulp.task('watch', (callback) => {
  gulp.watch(appSrc, gulp.parallel('watcher-appSrc'));
  callback();
});

gulp.task('dev', (callback) => {
  gulp.series(
    'watcher-appSrc',
    'watch'
  )();
  callback();
});

gulp.task('product', (callback) => {
  gulp.parallel(
    'js-product',
  )();
  callback();
});

gulp.task('default', (callback) => {
  gulp.series('dev')();
  callback();
});
