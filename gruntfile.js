module.exports = function (grunt) {
    grunt.config.set('bower', {
        install: {
            options: {
                targetDir: './RefreshHiloAngularJS'
            }
        }
    });
    grunt.loadNpmTasks('grunt-bower-task');
};