var gulp = require('gulp');

var config = {
    jsDependencies: [
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js',
    ]
};

gulp.task('migrateJsDependencies', function () {
    gulp.src('node_modules/@angular/**/*').pipe(gulp.dest('Exercise.Web/scripts/dependencies/@angular'));
    gulp.src('node_modules/rxjs/**/*').pipe(gulp.dest('Exercise.Web/scripts/dependencies/rxjs'));


    return gulp.src(config.jsDependencies).pipe(gulp.dest('Exercise.Web/scripts/dependencies'));
})

gulp.task('default', ['migrateJsDependencies'], function () { });