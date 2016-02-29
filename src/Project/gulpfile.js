/// <binding AfterBuild='moveTemplates, moveToLibs' />
var gulp = require('gulp');

var paths = {
    npmSrc: "./node_modules/",
    libTarget: "./wwwroot/libs/",

    templatesSrc: "./scripts/app/**/",
    templatesTarget: "./wwwroot/app/",
};

var libsToMove = [
   paths.npmSrc + 'angular2/bundles/angular2-polyfills.js',
   paths.npmSrc + 'angular2/bundles/router.dev.js',
   paths.npmSrc + 'angular2/bundles/http.dev.js',
   paths.npmSrc + 'systemjs/dist/system.js',
   paths.npmSrc + 'systemjs/dist/system-polyfills.js',
   paths.npmSrc + 'rxjs/bundles/Rx.js',
   paths.npmSrc + 'angular2/bundles/angular2.dev.js',
   paths.npmSrc + 'es6-shim/es6-shim.min.js',
];

gulp.task('moveToLibs', function () {
    return gulp.src(libsToMove).pipe(gulp.dest(paths.libTarget));
});


/** copy angular2 templates to wwwroot */
gulp.task('moveTemplates', function () {
    return gulp.src(paths.templatesSrc + '*.html').pipe(gulp.dest(paths.templatesTarget));
});
