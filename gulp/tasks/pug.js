/**
 * @param gulp
 * @param config {GulpConfig}
 * @param modules {GulpModules}
 */
module.exports = function (gulp, config, modules) {
    'use strict';

    gulp.task('pug', function() {
        modules.runSequence('html:run', 'html:watch');
    });

 gulp.task('pug:run', function() {
        gulp.src(config.pug)
        .pipe(pug()) // pip to pug plugin
        .pipe(gulp.dest(config.pugDest)); // tell gulp our output folder
    });

    gulp.task('pug:watch', function () {
        modules.watch(config.htmlWatch, function () {
            gulp.start('pug:run');
        });
    });
};