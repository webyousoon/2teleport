// dépendances
var gulp = require('gulp');

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
// COPY TASKS
// ******************************************

gulp.task('copy-sketch-2-android', function () {
  return gulp.src(basePaths.src + paths.android.src, {dot: true})
    .pipe(gulp.dest(basePaths.dest + paths.android.dest));
});

// ******************************************
// MASTER TASKS
// ******************************************

gulp.task('default', ['copy-sketch-2-android']);
