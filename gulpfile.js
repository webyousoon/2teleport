// dépendances
var gulp = require('gulp');
var watch = require('gulp-watch');

// variables
var basePaths = {
  src: 'tmp/',
  dest: '/Users/hackorder/work/workspaces/memonimo-android/'
};
var paths = {
  android: {
      src: 'android/**/*',
      dest: 'app/src/main/res/drawable/',
      sizes: [
        // 'ldpi,',
        'mdpi,',
        'hdpi,',
        'xhdpi,',
        'xxhdpi,',
        'xxxhdpi,'
      ]
  }
};

// ******************************************
// WATCH TASKS
// ******************************************

gulp.task('watch-android', function () {
  watch(basePaths.src + paths.android.src, function () {
    gulp.start('copy-sketch-2-android');
  });
});

// ******************************************
// COPY TASKS
// ******************************************

gulp.task('copy-sketch-2-android', function () {
  return gulp.src(basePaths.src + paths.android.src, {dot: true})
    .pipe(gulp.dest(basePaths.dest + paths.android.dest));
});

// ******************************************
// MASTER TASKS
// ******************************************

gulp.task('default', ['watch-android']);
