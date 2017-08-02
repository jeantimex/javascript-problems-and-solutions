import gulp from 'gulp';
import mocha from 'gulp-mocha';
import config from '../config';

gulp.task('test', () => {
  return gulp.src(config.test.src)
    .pipe(mocha({
      require: ['babel-polyfill'],
      compilers: 'js:babel-core/register',
    }));
});
