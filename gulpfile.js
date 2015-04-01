// dépendances
var gulp = require('gulp');
var watch = require('gulp-watch');
var del = require('del');

// variables
var basePaths = {
  src: 'tmp/',
  dest: '/Users/hackorder/work/workspaces/memonimo-android/'
};
var paths = {
  android: {
      src: 'android/**/*',
      dest: 'app/src/main/res/',
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
// CLEAN TASKS
// ******************************************

gulp.task('clean', function (cb) {
  del([
    // suppression complète dans le dossier source
    basePaths.src + '*',
    // excepté pour les fichiers Git
    !basePaths.src + '.git',
    !basePaths.src + '.gitignore'
  ], cb);
});

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
